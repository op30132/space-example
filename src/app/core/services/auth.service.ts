import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { tap, switchMap, map, catchError } from 'rxjs/operators';

import { AuthTokenService } from './auth-token.service';
import { RestService } from './rest.service';
import { Credential } from 'src/app/shared/models/credential.model';
import { AuthToken } from 'src/app/shared/models/auth-token.model';
import { Member } from 'src/app/shared/models/member.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static BASE_AUTH_URL = '/rest';
  static AUTHENTICATION_URL = `${AuthService.BASE_AUTH_URL}/auth/admin/authentication`;
  static USER_PROFILE_URL = `${AuthService.BASE_AUTH_URL}/member/user/accounts/myProfile`;

  private profile: Member;


  constructor(private restService: RestService,
    private tokenService: AuthTokenService) {
  }

  /**
   * 登入認證
   * @param credential 登入認證資訊
   */
  authentication(credential: Credential): Observable<any> {
    return this.restService.httpPost<AuthToken>(AuthService.AUTHENTICATION_URL, credential)
      .pipe(
        tap(resp => this.tokenService.authToekn = resp),
        switchMap(() => this.getUserProfile())
      );
  }

  /**
   * 使用者是否登入
   */
  isUserLogined(): Observable<boolean> {
    return this.getUserProfile()
      .pipe(map(() => true))
      .pipe(catchError(() => of(false)));
  }

  /**
   * 使用者登出
   */
  userLogout() {
    // TODO: 清除使用者資訊與authToken
  }

  getUserProfile(): Observable<Member> {

    // 是否有資料
    const localProfile = this.profile || JSON.parse(sessionStorage.getItem('userProfile'));
    if (localProfile) {
      return Observable.create((observer: Observer<Member>) => {
        observer.next(localProfile);
        observer.complete();
      });
    }

    return this.restService.httpGet<Member>(AuthService.USER_PROFILE_URL)
      .pipe(tap(profile => this.userProfile = profile));
  }

  set userProfile(profile: Member) {
    sessionStorage.setItem('userProfile', JSON.stringify(profile));
    this.profile = profile;
  }
}
