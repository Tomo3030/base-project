import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/components/logo.component';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { CardComponent } from '../../shared/components/card.component';
import { RippleDirective } from 'src/app/shared/directives/ripple.directive';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AnchorDirective } from 'src/app/shared/directives/anchor.directive';

@Component({
  selector: 'app-classroom-id-page',
  standalone: true,
  providers: [ToastService],
  template: `
    <div class="w-96 m-auto mt-12">
      <app-card>
        <div content class="flex flex-col gap-6">
          <app-logo></app-logo>
          <input
            type="text"
            class=" w-full  rounded border-2 border-primary-light placeholder:text-text/80 placeholder:font-semibold placeholder:text-sm bg-primary-light/20 px-6 py-2 text-center text-md font-bold focus:border-primary focus:ring-1  focus:ring-primary focus: outline-none"
            placeholder="Enter Classroom ID"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter Classroom ID'"
          />
          <button
            appButton
            appRipple
            (click)="joinClassroom()"
            class="h-[43px]"
          >
            Join Classroom
          </button>
        </div>
      </app-card>
      <div class="mt-3 text-xl text-center">
        <button
          (click)="router.navigate(['sign-in'])"
          class=" active:scale-y-[.85] text-sm transition-transform text-black underline rounded  py-2 px-4 hover:bg-white/50"
        >
          Sign In for more options
        </button>
      </div>
    </div>
  `,
  styles: [],
  imports: [
    CommonModule,
    LogoComponent,
    ButtonDirective,
    RippleDirective,
    CardComponent,
  ],
})
export class ClassroomIdPageComponent {
  constructor(public router: Router, public toast: ToastService) {}

  joinClassroom() {
    console.log('check if classroom exists and redirect to classroom');
    //this.router.navigate(['classroom', '123456']);
    this.toast.open('Classroom not found');
  }
}
