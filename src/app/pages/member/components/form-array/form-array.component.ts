import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';
import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import { Member } from 'src/app/shared/models/member.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsertMemberComponent } from '../insert-member/insert-member.component';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  // 查詢條件model
  queryMember: Member = new Member();
  // 分頁model
  queryPager: Pager<Member> = new Pager();

  memberList$: Observable<Pager<Member>>;
  memberListForm: FormGroup;
  constructor(
    private memberService: MemberService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.memberListForm = this.fb.group({
      member: this.fb.array([])
    });
  }
  ngOnInit() {
    this.reloadData();
  }
  get memberlist(): FormArray {
    return this.memberListForm.get('member') as FormArray;
  }
  patchForm(memberList: Member[]) {
    memberList.forEach(element => {
      this.memberlist.push(
        this.fb.group({
          account: [element.account, Validators.required],
          name: [element.name],
          cardNo: [element.cardNo],
          email: [element.email],
          status: [element.status],
          uuid: element.uuid
        })
      );
    });
  }
  addMember() {
    this.memberlist.push(
      this.fb.group({
        account: ['', Validators.required],
        name: ['', Validators.required],
        cardNo: ['', Validators.required],
        email: ['', Validators.required],
        status: ['']
      })
    );
  }
  // 直接編輯
  editSubmit(i) {
    if (this.memberListForm.valid) {
      this.memberService
        .updateMember(this.memberListForm.value.member[i])
        .subscribe(
          (result: any) => {
            alert('修改成功');
            // this.router.navigate(['pages/member']);
            this.reloadData();
          },
          err => {
            console.log(err);
            alert('修改失敗');
          }
        );
    } else {
      alert('表單未填寫完整');
    }
  }

  // 重載會員資料
  reloadData() {
    this.memberlist.clear();
    this.memberList$ = this.memberService
      .getMemberList(this.queryMember, this.queryPager)
      .pipe(
        tap(pager => {
          this.updateQueryPagerInfo(pager);
        })
      );
    this.memberList$.subscribe(val => {
      this.patchForm(val.resultList);
    });
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
