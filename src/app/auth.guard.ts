import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private us: UserService, private router: Router) {
  }

  canActivate() {
    if (this.us.isLogged()) {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}