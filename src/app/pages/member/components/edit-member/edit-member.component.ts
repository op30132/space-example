import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { Member } from 'src/app/shared/models/member.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  queryMember: Member = new Member();
  member$: Observable<Member>;
  profileForm: FormGroup;
  passwordForm: FormGroup;
  emailMsg: string;
  submitMsg: string;
  red: boolean;
  passwordEditStatus: boolean;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getMember();
  }
  // 設定表單
  createForm() {
    this.profileForm = this.fb.group({
      account: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null],
      name: [null, [Validators.required]],
      contactMobileTel: [null],
      createDate: [null],
      lastModifyDate: [null]
    });
    this.passwordForm = this.fb.group({
      newPass: [null, [Validators.required]],
      passCheck: [null, [Validators.required]]
    });
  }
  // 取得欲修改之會員資料
  getMember() {
    this.member$ = this.memberService
      .getMemberById(this.route.snapshot.params.id)
      .pipe(
        tap(user => {
          // 分別將data放進表單及儲存
          this.profileForm.patchValue(user);
          this.profileForm.patchValue({
            createDate: new Date(user.createDate).toISOString().slice(0, 10),
            lastModifyDate: new Date(user.lastModifyDate)
              .toISOString()
              .slice(0, 10)
          });
          this.queryMember = user;
        })
      );
  }
  // 修改送出
  onSubmit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.queryMember = Object.assign(
        this.queryMember,
        this.profileForm.value
      );
      this.memberService.updateMember(this.queryMember).subscribe(
        (result: any) => {
          this.submitMsg = '修改成功';
          alert(this.submitMsg);
          this.router.navigate(['pages/member']);
        },
        err => {
          alert('修改失敗');
        }
      );
    } else {
      this.submitMsg = '表單未填寫完整';
      alert(this.submitMsg);
    }
  }
  // email格式檢查
  checkEmail() {
    if (this.profileForm.value.email) {
      const pattern = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3}$/i;
      if (!pattern.test(this.profileForm.value.email)) {
        this.emailMsg = '信箱格式不符';
      }
    }
  }
  // 刪除資料
  deleteAccount() {
    const delCheck = confirm(
      '確認刪除該筆資料?\n帳號:' + this.queryMember.account
    );
    if (delCheck) {
      this.memberService.deleteMember(this.queryMember).subscribe(
        (result: any) => {
          this.submitMsg = '刪除成功';
          alert(this.submitMsg);
          this.router.navigate(['pages/member']);
        },
        err => {
          alert('刪除失敗');
        }
      );
    }
  }

  // 跳出密碼修改區塊
  passwordEdit() {
    this.passwordEditStatus = true;
    this.validatedRedStatus();
    this.passwordForm.reset();
  }
  // 檢查再次輸入密碼是否正確
  passwordCheck() {
    if (this.passwordForm.value.passCheck !== this.passwordForm.value.newPass) {
      alert('密碼不一致');
      return false;
    } else {
      return true;
    }
  }
  // 修改密碼
  passwordUpadte() {
    const checkRes = this.passwordCheck();
    if (!this.passwordForm.valid) {
      this.red = true;
    }
    if (this.passwordForm.valid && checkRes) {
      this.queryMember = Object.assign(
        this.queryMember,
        this.passwordForm.value.newPass
      );
      this.memberService.updateMember(this.queryMember).subscribe(
        (result: any) => {
          alert('修改密碼成功');
          this.passwordEditStatus = false;
        },
        err => {
          alert('修改密碼失敗');
        }
      );
    }
  }
  validatedRedStatus() {
    this.red = false;
  }
}
