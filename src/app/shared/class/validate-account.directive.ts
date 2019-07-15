import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map, startWith, first } from 'rxjs/operators';
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
export class UniqueAlterEgoValidator {
  constructor(private memberService: MemberService) { }

  queryMember: Member = new Member();
  searchTerms: Subject<Member> = new Subject();

  searchUser(text: string) {
    this.queryMember.account = text
    this.searchTerms.next(this.queryMember)
    return this.searchTerms
      .pipe(
        startWith(this.queryMember),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
          return this.memberService.getMemberList(query, null)
        }),
      );
  }

  validate(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(item =>
            (item.resultList.length > 0 ? { usernameExists: true } : null)
          ),
          first()
        )
    }
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
  constructor(private validator: UniqueAlterEgoValidator) { }

  validate(control: AbstractControl) {
    this.validator.validate();
  }
}
