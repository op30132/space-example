import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { switchMap, tap, map } from 'rxjs/operators';

import { Member } from 'src/app/shared/models/member.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  queryMember: Member = new Member();
  member$: Observable<Member>;

  profileForm: FormGroup;
  emailMsg: string = "";
  passwordEditStatus: boolean = false;
  constructor(private memberService: MemberService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getMember();
  }
  createForm() {
    this.profileForm = this.fb.group({
      account: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null, [Validators.required]],
      name: [null, [Validators.required]],
      contactMobileTel: [null],
      createDate: [null],
      lastModifyDate: [null],
    });
    // this.profileForm.controls['status'].setValue('Y', {onlySelf: true});
  }

  getMember() {
    this.member$ = this.memberService
      .getMemberById(this.route.snapshot.params.id)
      .pipe(
        tap(user => this.profileForm.patchValue(user))
      );
  }
  onSubmit() {
    console.log(this.profileForm.value)
    this.memberService
      .updateMember(this.profileForm.value)
  }
  checkEmail() {
    if (this.profileForm.value.email) {
      var pattern = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3}$/i;
      if (!pattern.test(this.profileForm.value.email)) {
        this.emailMsg = "信箱格式不符"
      }
    }
  }
  passwordEdit() {
    this.passwordEditStatus = true
  }

}
