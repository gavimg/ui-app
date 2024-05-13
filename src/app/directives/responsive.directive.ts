import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uaResponsive]'
})
export class ResponsiveDirective implements OnInit {
  @Input() appResponsive: string; // Comma-separated screen size breakpoints (e.g., 'md, lg')
  private currentScreenWidth: string = 'md'; // Default screen size

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const screenWidth = this.getScreenWidth();
    if (this.appResponsive.includes(screenWidth)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private getScreenWidth(): string {
    const width = window.innerWidth;
    if (width >= 1200) {
      return 'lg';
    } else if (width >= 992) {
      return 'md';
    } else if (width >= 768) {
      return 'sm';
    } else {
      return 'xs';
    }
  }
}


// <div [appResponsive]="'md, lg'">
//   This content is visible on medium and large screens.
// </div>
