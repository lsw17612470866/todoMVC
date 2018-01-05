import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Button {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('destroy');
  }

  private highlight(color: string) {
    this.el.nativeElement.class = color;
  }
}

