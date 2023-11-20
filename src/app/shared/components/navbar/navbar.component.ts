import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
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
