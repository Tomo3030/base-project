import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card.component';
import { LogoComponent } from '../../shared/components/logo.component';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { RippleDirective } from 'src/app/shared/directives/ripple.directive';

@Component({
  selector: 'app-enter-name-page',
  standalone: true,
  template: `
    <div class="w-96 m-auto mt-12">
      <app-card *ngIf="!user; else signedIn" class="w-96 m-auto">
        <div content class="flex flex-col gap-6 ">
          <app-logo></app-logo>
          <input
            [(ngModel)]="name"
            class=" w-full  rounded border-2 border-primary-light placeholder:text-text/80 placeholder:font-semibold placeholder:text-sm bg-primary-light/20 px-6 py-2 text-center text-md font-bold focus:border-primary focus:ring-1  focus:ring-primary focus: outline-none"
            type="text"
            autocomplete="off"
            placeholder="Enter Nickname"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter Nickname'"
          />
          <button appButton appRipple class="h-[43px]" (click)="login()">
            Sign In
          </button>
        </div>

        <button>cji</button>
      </app-card>

      <ng-template #signedIn>
        <app-card class="w-96 m-auto">
          <div content class="flex flex-col items-center gap-4">
            <img src="assets/fist.svg" alt="" />
            <div class=" text-2xl mb-">Welcome Back</div>
            <div class="text-4xl font-bold ">
              {{ user?.displayName }}
            </div>

            <div class=" text-center mt-4 border-t w-full pt-4">
              <div class="">not {{ user?.displayName }}?</div>
              <button (click)="logout()" class="underline">
                Sign in with different account
              </button>
            </div>
          </div>
        </app-card>
      </ng-template>
    </div>
  `,
  styles: [],
  imports: [
    CommonModule,
    CardComponent,
    LogoComponent,
    FormsModule,
    ButtonDirective,
    RippleDirective,
  ],
})
export class EnterNamePageComponent {
  user: any = null;
  name: string = '';
  login() {}
  logout() {}
}
