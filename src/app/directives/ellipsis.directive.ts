import { AfterViewInit, Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[uaEllipsis]',
  standalone: true
})
export class EllipsisDirective implements AfterViewInit {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);


  ngAfterViewInit() {
    const container = this.el.nativeElement;
    const content = container.innerHTML;
    if(container.scrollWithd > container.clientWidth) {
      this.renderer.setAttribute(container, 'title', content);
      this.renderer.setStyle(container, 'white-space', 'nowrap');
      this.renderer.setStyle(container, 'overflow', 'hidden');
      this.renderer.setStyle(container, 'text-overflow', 'ellipsis');
    }
  }

}

/** usage */
// <div uaEllipsis>
//   This is a long text that will be truncated with an ellipsis if it overflows its container.
// </div>
