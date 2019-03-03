import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/core/models/member.model';
import { MemberService } from '../../services/member.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
     * 1.可自行決定如何將要修改帳號之資訊傳至這
     * 2. 並依照資訊取得欲修改帳號之資訊並呈現於畫面
     * 3. 必須小心非同步資料抓取延遲問題
     * 4. template只是參考畫面，可參考研究小間或自行發揮
     * 5. Good Luck!
     * */

  }



}
