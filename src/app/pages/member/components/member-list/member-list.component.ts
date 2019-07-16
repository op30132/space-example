import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';
import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import { Member } from 'src/app/shared/models/member.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsertMemberComponent } from '../insert-member/insert-member.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class MemberListComponent implements OnInit {
  // 查詢條件model
  queryMember: Member = new Member();
  // 分頁model
  queryPager: Pager<Member> = new Pager();
  memberList$: Observable<Pager<Member>>;

  constructor(
    private memberService: MemberService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  // 重載會員資料
  reloadData() {
    this.memberList$ = this.memberService
      .getMemberList(this.queryMember, this.queryPager)
      .pipe(
        tap(pager => {
          this.updateQueryPagerInfo(pager);
        })
      );
  }
  // 將拿到的pager資料設定回queryPager
  updateQueryPagerInfo(pager: Pager<Member>) {
    this.queryPager.currentPage = pager.currentPage;
    this.queryPager.totalCount = pager.totalCount;
  }

  // 跳出會員帳號modal
  open() {
    this.modalService.open(InsertMemberComponent, { size: 'lg' });
  }
  // pagination
  onPageChange(nextPage: Pager<any>) {
    this.reloadData();
  }
}
