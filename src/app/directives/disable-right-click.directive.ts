import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[uaDisableRightClick]'
})
export class DisableRightClickDirective {
  constructor() {}

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: Event): void {
    event.preventDefault();
  }
}

// <div appDisableRightClick>
//   Right-clicking is disabled on this element.
// </div>
