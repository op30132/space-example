import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { switchMap, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
     * 1. 可自行決定如何將要修改帳號之資訊傳至這
     * 2. 並依照資訊取得欲修改帳號之資訊並呈現於畫面
     * 3. 必須小心非同步資料抓取延遲問題
     * 4. Good Luck!
     * */
  }
}
