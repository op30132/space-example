import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  // 查詢條件model
  queryMember: Member = new Member();
  // 分頁model
  queryPager: Pager<Member> = new Pager();

  memberList$: Observable<Pager<Member>>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.queryPager.pageSize = 10;

    this.reloadData();
  }

  reloadData() {
    this.memberList$ = this.memberService
      .getMemberList(this.queryMember, this.queryPager)
      .pipe(
        tap(pager => this.updateQueryPagerInfo(pager))
      );
  }

  updateQueryPagerInfo(pager: Pager<Member>) {
    this.queryPager.currentPage = pager.currentPage;
    this.queryPager.totalCount = pager.totalCount;
  }

}
