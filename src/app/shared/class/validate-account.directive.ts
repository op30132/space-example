import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { MemberService } from '../../pages/member/services/member.service';
import { Observable, Subject } from 'rxjs';
import { Member } from 'src/app/shared/models/member.model';
import { Pager } from 'src/app/shared/models/pager.model';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  share,
  tap
} from 'rxjs/operators';

// reactive form
@Injectable()
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private memberService: MemberService) {}
  accountCheck$: Observable<Pager<Member>>;
  queryMember: Member = new Member();
  // searchTerms: Subject<Member> = new Subject();

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if (ctrl.value) {
      this.queryMember.account = ctrl.value;
    }
    console.log(this.queryMember);
    return this.memberService.getMemberList(this.queryMember, null).pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(item =>
        item.resultList.length > 0 ? { usernameExists: true } : null
      ),
      catchError(() => null)
    );
  }
}
// 用於模板驅動表單
@Directive({
  selector: '[appUniqueAccountCheck]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidator),
      multi: true
    }
  ]
})
export class ValidateAccountDirective {
  constructor(private validator: UniqueAlterEgoValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
