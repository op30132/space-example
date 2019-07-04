import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  startWith,
  share
} from 'rxjs/operators';

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css']
})
export class InsertMemberComponent implements OnInit {
  newMember: Member = new Member();
  insertForm: FormGroup;
  clicked: boolean;
  isInvalid: boolean;

  // 查詢條件model
  queryMember: Member = new Member();
  memberList$: Observable<Pager<Member>>;

  private searchTerms: Subject<Member> = new Subject();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router
  ) {
    this.insertForm = this.fb.group({
      account: [null, [Validators.required]],
      status: [null, [Validators.required]],
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null],
      contactMobileTel: [null]
    });
    this.insertForm.controls['status'].setValue('Y', { onlySelf: true });
  }

  ngOnInit() {
    this.memberList$ = this.searchTerms.pipe(
      // startWith(this.insertForm.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.memberService.getMemberList(query, null)),
      share()
    );
  }
  // 檢查帳號是否重複
  accountCheck() {
    this.queryMember.account = this.insertForm.value.account;
    this.searchTerms.next(this.insertForm.value);
  }
  // email格式檢查
  checkEmail() {
    if (this.insertForm.value.email) {
      const pattern = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3}$/i;
      if (!pattern.test(this.insertForm.value.email)) {
        alert('信箱格式不符');
      }
    }
  }
  // 送出新增會員表單
  insertAccount() {
    if (this.insertForm.valid) {
      this.clicked = true;
      this.newMember = Object.assign(this.newMember, this.insertForm.value);
      this.memberService.insertMember(this.newMember).subscribe(
        (result: any) => {
          if (result) {
            alert('新增成功');
            this.activeModal.close('Close click');
          } else {
            alert('新增失敗');
          }
        },
        err => {
          alert(err.error.msg);
        }
      );
    } else {
      this.isInvalid = false;
    }
  }
}
