import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, inject } from '@angular/core';

@Directive({
  selector: '[uaInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {

  @Input() scrollThreshold = 100;
  @Output() scrolled = new EventEmitter<void>();
  private el = inject(ElementRef)

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight  + this.scrollThreshold;

    if(atBottom) {
      this.scrolled.emit();
    }
  }
}

// <div class="scrollable-content" appInfiniteScroll (scrolled)="loadMoreData()">
//   <!-- Your list of items -->
// </div>
