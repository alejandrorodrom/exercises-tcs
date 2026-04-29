import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CandidateUser {
  id: string;
  fullName: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsersByOrganization(organizationId: string): Observable<CandidateUser[]> {
    return of([
      { id: `${organizationId}-1`, fullName: 'Ana Diaz' },
      { id: `${organizationId}-2`, fullName: 'Luis Perez' }
    ]);
  }
}
