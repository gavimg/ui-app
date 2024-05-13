import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[uaInputMask]',
  standalone: true
})
export class InputMaskDirective {

  @Input() uaInputMask: string = '';
  private el = inject(ElementRef)

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const originalValue = input.value.replace(/\D/g, '');
    let maskedValue = '';

    let valueIndex = 0;
    for (let maskIndex = 0; maskIndex < this.uaInputMask.length; maskIndex++) {
      if (/\d/.test(this.uaInputMask[maskIndex])) {
        if (originalValue[valueIndex]) {
          maskedValue += originalValue[valueIndex++];
        } else {
          break;
        }
      } else {
        maskedValue += this.uaInputMask[maskIndex];
      }
    }

    input.value = maskedValue;
  }

}

// <input type="text" [appInputMask]="'(999) 999-9999'">
