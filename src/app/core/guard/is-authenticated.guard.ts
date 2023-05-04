import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from "../../shared/services/authentication.service";

export const isAuthenticatedGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService)
  const router = inject(Router)
  if (authenticationService.getPrincipal() != null) {
    return true
  }
  router.navigate(["/", "login"]);
  return false
}
