import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-select',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [],
})
export class TeamSelectComponent {
  carItems: any[] = [];
  currentSlide = 0;
  currentDisplay = 0;

  @Input() set carouselItems(items: any[]) {
    this.carItems = items;
    if (items) this.slideChange.emit(items[0]);
  }

  @Input() template!: TemplateRef<any>;
  @Output() slideChange = new EventEmitter();

  increment() {
    if (this.currentSlide === this.carItems.length - 1) return;
    this.currentSlide++;
    setTimeout(() => {
      this.slideChange.emit(this.carItems[this.currentSlide]);
      this.currentDisplay = this.currentSlide;
    }, 200);
  }

  decerement() {
    if (this.currentSlide === 0) return;
    this.currentSlide--;
    setTimeout(() => {
      this.slideChange.emit(this.carItems[this.currentSlide]);
      this.currentDisplay = this.currentSlide;
    }, 200);
  }
}
