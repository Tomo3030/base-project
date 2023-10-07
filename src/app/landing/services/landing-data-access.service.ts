import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LandingDataAccessService {
  constructor(private db: Firestore) {}

  public async checkIfClassroomExists(classroomId: string): Promise<boolean> {
    const docRef = doc(this.db, 'classrooms', classroomId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }
}
