import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[uaClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  private el = inject(ElementRef);

  @Output() uaClickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if(!this.el.nativeElement.contains(event.target))
    this.uaClickOutside.emit();
  }
}

/** usage */
// <div uaClickOutside (uaClickOutside)="closeDropdown()">
//   <button (click)="toggleDropdown()">Toggle Dropdown</button>
//   <div *ngIf="dropdownOpen" class="dropdown">
//     Dropdown content
//   </div>
// </div>
