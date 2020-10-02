import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
    authenticationFailure = false

    constructor(
        private fb: FormBuilder,
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
