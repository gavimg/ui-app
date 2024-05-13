import { Directive, ElementRef, Input, OnChanges, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[uaHighlightSearch]',
  standalone: true
})
export class HighlightSearchDirective implements OnChanges {

  @Input() searchQuery: string;
  private el = inject(ElementRef);

  ngOnChanges(): void {
    if(this.searchQuery && this.searchQuery.length > 0) {
      const text = this.el.nativeElement.innerText;
      const regex = new RegExp(`${this.escapeRegExp(this.searchQuery)}`, 'gi');
      const highlightedText = text.replace(regex, '<mark>$1</mark>');
      this.el.nativeElement.innerText = highlightedText;
    }
  }

  private escapeRegExp(query: string): string {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

}

// <p [appHighlightSearch]="searchQuery">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisquam iste, qui ex ea voluptate velit
// </p>
// https://blog.stackademic.com/mastering-angular-custom-directives-a-comprehensive-guide-with-15-real-world-examples-2023-a1d4645c4a0f
