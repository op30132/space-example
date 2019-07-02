import { Component, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import { Member } from 'src/app/shared/models/member.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
   encapsulation: ViewEncapsulation.None,
})
export class MemberListComponent implements OnInit {

  // 查詢條件model
  queryMember: Member = new Member();
  // 分頁model
  queryPager: Pager<Member> = new Pager();

  memberList$: Observable<Pager<Member>>;

  public pageSizes: Number[] = [10, 30, 50, 100];

  constructor(private memberService: MemberService,private modalService: NgbModal) { }

  ngOnInit() {
    this.queryPager.pageSize = 10;
    this.reloadData();
  }
  // 重載會員資料
  reloadData() {
    this.memberList$ = this.memberService
      .getMemberList(this.queryMember, this.queryPager)
      .pipe(
        tap(pager => this.updateQueryPagerInfo(pager))
      );
  }
  // 將拿到的pager資料設定回queryPager?
  updateQueryPagerInfo(pager: Pager<Member>) {
    this.queryPager.currentPage = pager.currentPage;
    this.queryPager.totalCount = pager.totalCount;
  }
  // 每頁幾筆
  onChange(page){
    this.queryPager.pageSize = page;
    this.reloadData();
  }
  // pagination換分頁
  pageChange(nextPage){
    this.queryPager.currentPage = nextPage;
    this.reloadData();
  }
  // 新增會員帳號
  insertAccount(content){
    this.modalService.open(content, { size: 'lg' });
  }
}
