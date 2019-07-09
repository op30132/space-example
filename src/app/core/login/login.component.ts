import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // 需要加入Validator驗證
  loginFormGroup: FormGroup;
  loading: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.loginFormGroup = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('userProfile')) {
      // 回到上個url
      // this.location.back();
      this.router.navigate(['/pages/member']);
    }
  }

  submitForm() {
    /**
     * 上述完成後，接著將畫面切換至 member-list 畫面，畫面切換可以透過router處理
     */
    this.loading = true;
    this.authService
      .authentication(this.loginFormGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/pages/member']);
        },
        error => {
          // if (!error.ok) {
          this.loading = false;
          alert('帳號或密碼錯誤');
          this.loginFormGroup.controls['password'].reset();
          // }
        }
      );
  }
}
