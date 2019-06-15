import { Component, OnInit } from '@angular/core';
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
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

  }

  submitForm() {
    /**
     * 上述完成後，接著將畫面切換至 member-list 畫面，畫面切換可以透過router處理
     */
    this.authService.authentication(this.loginFormGroup.value).subscribe();
  }
}
