import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      button works!
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent {

}