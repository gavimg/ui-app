
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uaCopyToClipboard]'
})
export class CopyToClipboardDirective {
  @Input() uaCopyToClipboard: string;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    if (this.uaCopyToClipboard) {
      const textarea = document.createElement('textarea');
      textarea.value = this.uaCopyToClipboard;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
}

// <button [appCopyToClipboard]="'Text to copy'">Copy to Clipboard</button>
