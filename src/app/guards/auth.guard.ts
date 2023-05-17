import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (!this.auth.isLoggedIn()) {
        console.log("user is not logged in")
        this.router.navigate(['/login']);
        return false;
      } 
      console.log("user is logged in")
      return this.auth.isLoggedIn(); 
  }
}
