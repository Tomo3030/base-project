import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true,
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = this.renderer.createElement('span');
    this.renderer.setStyle(ripple, 'left', x + 'px');
    this.renderer.setStyle(ripple, 'top', y + 'px');
    this.renderer.setStyle(ripple, 'position', 'absolute');
    this.renderer.setStyle(ripple, 'background', 'white');
    this.renderer.setStyle(ripple, 'opacity', '0.5');
    this.renderer.setStyle(ripple, 'borderRadius', '50%');
    this.renderer.setStyle(ripple, 'width', '24px');
    this.renderer.setStyle(ripple, 'height', '24px');
    this.renderer.setStyle(
      ripple,
      'transform',
      'translate(-50%, -50%) scale(0)'
    );
    this.renderer.setStyle(ripple, 'animation', 'ripple .7s');
    this.renderer.appendChild(this.el.nativeElement, ripple);
    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, ripple);
    }, 1000);
  }
}
