import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { switchMap, tap,map } from 'rxjs/operators';

import { Member } from 'src/app/shared/models/member.model';
import { Observable } from 'rxjs';
import {  FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  queryMember: Member = new Member();
  member$: Observable<Member>;

  profileForm: FormGroup;

  constructor(private memberService: MemberService, private route: ActivatedRoute) {
    this.profileForm = new FormGroup({
      account: new FormControl(''),
      status: new FormControl(''),
      email: new FormControl(''),
      name: new FormControl(''),
      contactMobileTel: new FormControl(''),
      createDate: new FormControl(''),
      lastModifyDate: new FormControl(''),
    });
    // this.profileForm.controls['status'].setValue('Y', {onlySelf: true});
  }

  ngOnInit() {
    this.getMember();
  }

  getMember(){
    this.member$ = this.memberService
      .getMemberById(this.route.snapshot.params.id)
      .pipe(
        tap(user => this.profileForm.patchValue(user))
      );
  }
  onSubmit(){

  }
}
