import { Injectable } from '@angular/core';
import { AuthToken } from '../models/auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  private token: AuthToken;
  constructor() { }

  set authToekn(token: AuthToken) {
    this.token = token;
    sessionStorage.setItem('authToken', JSON.stringify(this.token));
  }

  get authToken(): string {
    this.token = this.token || JSON.parse(sessionStorage.getItem('authToken'));
    return this.token ? this.token.authToken : '';
  }

  get logonUserId(): string {
    this.token = this.token || JSON.parse(sessionStorage.getItem('authToken'));
    return this.token ? this.token.uuid : '';
  }
}
