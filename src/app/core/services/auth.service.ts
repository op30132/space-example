import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { Credential } from '../../shared/models/credential.model';
import { AuthToken } from '../../shared/models/auth-token.model';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static BASE_AUTH_URL = '/rest/auth';
  static AUTHENTICATION_URL = `${AuthService.BASE_AUTH_URL}/admin/authentication`;

  constructor(private restService: RestService, private tokenService: AuthTokenService) {

  }

  /**
   * 登入認證
   * @param credential
   */
  authentication(credential: Credential): Observable<any> {
    return this.restService.httpPost<AuthToken>(AuthService.AUTHENTICATION_URL, credential)
      .pipe(
        tap((token: AuthToken) => this.tokenService.authToekn = token)
      );
  }
}
