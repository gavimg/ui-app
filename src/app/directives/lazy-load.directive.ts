import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[uaLazyLoad]',
  standalone: true
})
export class LazyLoadDirective {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this.isElementInViewport()) {
      this.loadImage();
    }
  }

  isElementInViewport() {
    const rect = this.el.nativeElement.getBoundingClientRect();

    return (
      rect.top > 0 &&
      rect.left > 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  loadImage() {
    const dataSrc = this.el.nativeElement.getAttribute('data-src');

    if(dataSrc) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', dataSrc);
      this.el.nativeElement.removeAttribute('data-src');
    }
  }

}

/** usage */
// <img
//   src="placeholder.jpg"
//   data-src="lazy-image.jpg"
//   alt="Lazy-loaded image"
//   uaLazyLoad
// />
