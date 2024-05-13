import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[uaTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit {
  @Input() uaTooltip: string;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private tooltipElement: HTMLDivElement;
  private isVisible: boolean = false;

  ngOnInit() {
    this.createTooltipElement();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideTooltip();
  }

  private createTooltipElement() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.tooltipElement.innerHTML = this.uaTooltip;
    this.renderer.setStyle(this.tooltipElement, 'display', 'none');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private showTooltip() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const top = rect.top - this.tooltipElement.clientHeight - 10;
    const left = rect.left + rect.width / 2 - this.tooltipElement.clientWidth / 2;

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltipElement, 'display', 'block');
    this.isVisible = true;
  }

  private hideTooltip() {
    this.renderer.setStyle(this.tooltipElement, 'display', 'none');
    this.isVisible = false;
  }
}

// <button [appTooltip]="'Click me to learn more'">Learn More</button>
