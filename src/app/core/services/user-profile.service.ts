import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { Member } from '../../shared/models/member.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  static BASE_AUTH_URL = '/rest/member/user/accounts';
  static USER_PROFILE_URL = `${UserProfileService.BASE_AUTH_URL}/myProfile`;

  private profile: Member;

  constructor(private restService: RestService) { }

  getUserProfile(): Observable<Member> {
    return this.restService.httpGet<Member>(UserProfileService.USER_PROFILE_URL)
      .pipe(tap(profile => this.profile = profile));
  }

  get userProfile() {
    return this.profile;
  }
}
