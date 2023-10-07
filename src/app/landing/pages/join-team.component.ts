import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSelectComponent } from '../components/team-select.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-join-team',
  standalone: true,
  template: `
    <div>
      <app-team-select></app-team-select>
    </div>
  `,
  styles: [],
  imports: [CommonModule, TeamSelectComponent],
})
export class JoinTeamComponent {}
