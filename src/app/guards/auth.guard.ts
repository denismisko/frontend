import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if (!this.auth.isLoggedIn()) {
      console.log("user is not logged in");
      await this.router.navigate(['/login']);
      return false;
    }
    console.log("user is logged in");
    return this.auth.isLoggedIn();
  }
}
