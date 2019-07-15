import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from '../../services/member.service';
import { Pager } from 'src/app/shared/models/pager.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
// import {
//   debounceTime,
//   switchMap,
//   distinctUntilChanged,
//   startWith,
//   share
// } from 'rxjs/operators';
import { UniqueAlterEgoValidator } from '../../../../shared/class/validate-account.directive';

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css'],
  providers: [UniqueAlterEgoValidator]
})
export class InsertMemberComponent implements OnInit {
  newMember: Member = new Member();
  insertForm: FormGroup;
  clicked: boolean;
  isInvalid: boolean;
  emailInValid: Boolean;
  // 查詢條件model
  // queryMember: Member = new Member();
  // accountCheck$: Observable<Pager<Member>>;
  // private searchTerms: Subject<Member> = new Subject();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router,
    private accountValidator: UniqueAlterEgoValidator
  ) {
    this.insertForm = this.fb.group(
      {
        account: [
          null,
          [
            Validators.required,
            Validators.maxLength(20),
            this.accountValidator.validate.bind(this.accountValidator)
          ]
        ],
        status: [null, Validators.required],
        name: [null, [Validators.required, Validators.maxLength(20)]],
        password: [null, [Validators.required, Validators.maxLength(20)]],
        passwordCheck: [null, [Validators.required, Validators.maxLength(20)]],
        email: [null, [Validators.maxLength(50)]],
        contactMobileTel: [null, Validators.maxLength(20)]
      },
      { updateOn: 'change' }
    );
    this.insertForm.controls['status'].setValue('Y', { onlySelf: true });
  }
  // validator自訂
  // formArray+reacive form
  ngOnInit() {
    // this.accountCheck$ = this.searchTerms.pipe(
    //   // startWith(this.insertForm.value),
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap(query => this.memberService.getMemberList(query, null)),
    //   share()
    // );
  }
  // 檢查帳號是否重複
  accountCheck() {
    // this.queryMember.account = this.insertForm.value.account;
    // this.searchTerms.next(this.insertForm.value);
  }

  // email格式檢查
  checkEmail() {
    if (this.insertForm.value.email) {
      const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gim;
      if (!pattern.test(this.insertForm.value.email)) {
        this.emailInValid = true;
      }
    }
  }
  // 送出新增會員表單
  insertAccount() {
    if (this.insertForm.valid && !this.emailInValid) {
      this.clicked = true;
      this.newMember = Object.assign(this.newMember, this.insertForm.value);
      this.memberService.insertMember(this.newMember).subscribe(
        (result: any) => {
          alert('新增成功');
          this.activeModal.close('Close click');
          this.router.navigate(['./']);
        },
        err => {
          alert('新增失敗');
        }
      );
    } else {
      this.isInvalid = false;
      alert('表單填寫不完整');
    }
  }
}
