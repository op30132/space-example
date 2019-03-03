import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Observable } from 'rxjs';
import { Pager } from 'src/app/core/models/pager.model';
import { Member } from 'src/app/core/models/member.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mb-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  queryMember: Member = new Member();
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
