import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // 需要加入Validator驗證
  loginFormGroup: FormGroup = new FormGroup({
    account: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private authService: AuthService) { }

  ngOnInit() {

  }

  submitForm() {
    /**
     * 1. 認證成功後，會取的AuthToken，需將token存於 AuthTokenService內
     * 2. 以取得的authToken中向後端取得登入者帳號資訊(profile)，可使用 UserProfileService處理
     * 3. 上述完成後，接著將畫面切換至 member-list 畫面，畫面切換可以透過router處理
     */
    this.authService.authentication(this.loginFormGroup.value).subscribe();
  }
}
