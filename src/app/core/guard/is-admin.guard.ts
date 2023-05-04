import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';
import {AuthenticationService} from "../../shared/services/authentication.service";

export const isAdminGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService)
  return authenticationService.getPrincipal()?.role === 'admin';

}
