import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

type Principal = { role: string; name: string };


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private localStorage: Storage = localStorage
  private principal: Principal | null = this.rehydrateFromLocalStorage();


  constructor(private router: Router) {
  }

  private rehydrateFromLocalStorage() {
    const principal = this.localStorage.getItem("principal");
    return principal && JSON.parse(principal)
  }

  getPrincipal(): Principal | null {
    return this.principal
  }

  authenticate(username: string, password: string): boolean {
    if (username === password && username === "user") {
      this.principal = {name: "user", role: "user"}
      return true
    }
    if (username === password && username === "admin") {
      this.principal = {name: "admin", role: "admin"}
    }
    if (this.principal != null) {
      this.localStorage.setItem("principal", JSON.stringify(this.principal))
      return true
    }
    return false
  }

  logout() {
    this.principal = null
    this.localStorage.removeItem("principal")
    this.router.navigate(["/"], {onSameUrlNavigation: "reload"})
  }
}
