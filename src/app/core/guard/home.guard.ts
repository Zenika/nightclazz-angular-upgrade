import { Injectable } from '@angular/core';
import { CanMatch } from '@angular/router'
import { AuthenticationService } from '../../shared/services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanMatch {

  constructor(private authenticationService: AuthenticationService) {
  }
  canMatch(): boolean {
    return this.authenticationService.getPrincipal() !== null
  }
}
