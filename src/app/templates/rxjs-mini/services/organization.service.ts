import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Organization {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  getOrganizationByCode(code: string): Observable<Organization> {
    return of({
      id: code.toUpperCase(),
      name: `Organizacion ${code.toUpperCase()}`
    });
  }
}
