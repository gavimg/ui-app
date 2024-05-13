import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[uaPasswordValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective {

  @Input('uaPasswordValidator') requiredPattern: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value) {
      const pattern = new RegExp(this.requiredPattern);
      const isValid = pattern.test(control.value);

      if(!isValid) {
        return { passwordPattern: true };
      }
    }
    return null;
  }

}


/** Use directive as below */
// <input
//   type="password"
//   name="password"
//   [(ngModel)]="user.password"
//   #password="ngModel"
//   uaPasswordValidator="[A-Za-z]+[0-9]+"
//   required
// />

// <div *ngIf="password.invalid && (password.dirty || password.touched)">
//   <div *ngIf="password.hasError('required')">Password is required.</div>
//   <div *ngIf="password.hasError('passwordPattern')">Password must contain letters and numbers.</div>
// </div>
