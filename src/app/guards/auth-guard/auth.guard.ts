import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Router,
  Route,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(public authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['login-page']);
    }
    return isLoggedIn;
  }

  canLoad(route: Route): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['login-page']);
    }
    return isLoggedIn;
  }
}
