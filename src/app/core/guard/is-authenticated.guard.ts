import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../../shared/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticationService.getPrincipal() != null) {
      return true
    }
    this.router.navigate(["/", "login"]);
    return false
  }

}
