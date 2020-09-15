import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private altertify: AlertifyService
  ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.altertify.error('Do not try to sneak in!');
    this.router.navigate(['/home']);
    return false;
  }
}
