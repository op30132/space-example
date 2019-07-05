import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): boolean {
    let temp;
    this.authService.isUserLogined().subscribe(res => {
      temp = res;
    });
    if (temp) {
      console.log('im in');
      return true;
    }
    console.log('unauthorized');
    this.router.navigate(['/login']);
    return false;
  }
}
