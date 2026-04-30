import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CandidateUser {
  id: string;
  fullName: string;
}

const USERS_BY_ORGANIZATION: Record<string, CandidateUser[]> = {
  ACME: [
    { id: 'acme-1', fullName: 'Ana Diaz' },
    { id: 'acme-2', fullName: 'Luis Perez' },
    { id: 'acme-3', fullName: 'Marta Campos' }
  ],
  GLOBEX: [
    { id: 'globex-1', fullName: 'Carlos Rojas' },
    { id: 'globex-2', fullName: 'Sofia Herrera' }
  ],
  INITECH: [
    { id: 'initech-1', fullName: 'Pedro Alvarez' },
    { id: 'initech-2', fullName: 'Elena Marin' },
    { id: 'initech-3', fullName: 'Diego Luna' }
  ]
};

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsersByOrganization(organizationId: string): Observable<CandidateUser[]> {
    const normalizedId = organizationId.trim().toUpperCase();
    return of(USERS_BY_ORGANIZATION[normalizedId] ?? []);
  }
}
