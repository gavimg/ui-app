import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[uaAutofocus]',
  standalone: true
})
export class AutofocusDirective implements AfterViewInit {

  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

}

/** usage */
// <input type="text" placeholder="Auto-focused input" uaAutofocus />
