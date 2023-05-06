import { Component } from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { Router } from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent {
    form: UntypedFormGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
    authenticationFailure = false

    constructor(
        private fb: UntypedFormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router) {
    }

    login() {
        const {username, password} = this.form.value
        if (this.authenticationService.authenticate(username, password)) {
            this.router.navigate(["/"])
        } else {
            this.authenticationFailure = true
        }
    }
}
