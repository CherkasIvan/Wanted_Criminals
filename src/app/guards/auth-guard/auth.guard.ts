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
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login-page']);
    return false;
  }

  canLoad(route: Route): boolean {
    let url: string | undefined = route.path;
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login-page']);
    return false;
  }
}
