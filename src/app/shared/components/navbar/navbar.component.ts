import { Component } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class NavbarComponent {

    constructor(private authenticationService: AuthenticationService) {
    }

    isAtLeastUser() {
        return this.authenticationService.getPrincipal() != null
    }

    isAtLeastAdmin() {
        return this.authenticationService.getPrincipal()?.role === 'admin'
    }

    logout() {
        this.authenticationService.logout()
    }
}
