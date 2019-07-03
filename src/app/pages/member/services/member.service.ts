import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestService } from 'src/app/core/services/rest.service';
import { Member } from 'src/app/shared/models/member.model';
import { Pager } from 'src/app/shared/models/pager.model';
import { QueryOption } from 'src/app/shared/models/query-option.model';
import { MemberServicesModule } from '../member-services.module';

@Injectable({
  providedIn: MemberServicesModule
})
export class MemberService {
  static BASE_URL = '/rest/member/admin/accounts';
  static MEMBER_LIST_URL = `${MemberService.BASE_URL}/pager`;

  /**
   *
   * 下列為範例，可自行增修
   */
  constructor(private restService: RestService) {}

  /**
   * 依照傳入查詢條件與分頁條件向後端發除查詢請求
   * @param queryMember 查詢條件
   * @param pager 分頁條件
   */
  getMemberList(
    queryMember: Member,
    pager: Pager<Member>
  ): Observable<Pager<Member>> {
    const queryOption: QueryOption = new QueryOption(queryMember, pager);

    return this.restService.httpGet<Pager<Member>>(
      MemberService.MEMBER_LIST_URL,
      queryOption
    );
  }

  /**
   * 以帳號 uuid 查詢資訊
   * @param uuid 欲查詢帳號之uuid
   */
  //用在帳號編輯
  getMemberById(uuid: string): Observable<Member> {
    return this.restService.httpGet<Member>(
      `${MemberService.BASE_URL}/${uuid}`
    );
  }

  /**
   * 更新帳號資訊
   *
   * @param member 欲更新之帳號
   */
  updateMember(member: Member) {
    return this.restService.httpPut(
      `${MemberService.BASE_URL}/${member.uuid}`,
      member
    );
  }

  /**
   * 刪除帳號
   *
   * @param member 欲刪除之帳號
   */
  deleteMember(member: Member) {
    return this.restService.httpDelete(
      `${MemberService.BASE_URL}/${member.uuid}`
    );
  }
}
