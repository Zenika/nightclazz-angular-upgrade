import {inject} from '@angular/core';
import {CanMatchFn} from '@angular/router'
import {AuthenticationService} from '../../shared/services/authentication.service'

export const homeGuard: CanMatchFn = () => {
  const authenticationService = inject(AuthenticationService)
  return authenticationService.getPrincipal() !== null
}
