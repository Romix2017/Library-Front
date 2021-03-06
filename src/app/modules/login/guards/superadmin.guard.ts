import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (this.authService.isSuperuser() && this.authService.isLoggedIn()) {
      this.router.navigate(['/roles']);
    }
    return !this.authService.isSuperuser();
  }
}
