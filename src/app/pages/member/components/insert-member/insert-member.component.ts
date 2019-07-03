import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/shared/models/member.model';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css']
})
export class InsertMemberComponent implements OnInit {

  newMember: Member = new Member();
  insertForm: FormGroup;
  clicked: boolean = false;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
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

  ngOnInit() { }
  // 帳號、姓名、狀態、Email與電話與密碼
  // 檢查帳號是否存在
  // 驗證欄位
  // 避免使用者連續輸入帳號時，送出過多的檢查請求

  // email格式檢查
  checkEmail() {
    if (this.insertForm.value.email) {
      const pattern = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3}$/i;
      if (!pattern.test(this.insertForm.value.email)) {
        alert('信箱格式不符');
      }
    }
  }
  insertAccount() {
    this.clicked = true;
  }
}
