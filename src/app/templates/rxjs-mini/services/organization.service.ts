import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Organization {
  id: string;
  name: string;
}

const ORGANIZATIONS_BY_CODE: Record<string, Organization> = {
  acme: { id: 'ACME', name: 'Acme Corporation' },
  globex: { id: 'GLOBEX', name: 'Globex Corporation' },
  initech: { id: 'INITECH', name: 'Initech' }
};

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  getOrganizationByCode(code: string): Observable<Organization> {
    const normalizedCode = code.trim().toLowerCase();
    const fallbackId = normalizedCode.toUpperCase();
    return of(
      ORGANIZATIONS_BY_CODE[normalizedCode] ?? {
        id: fallbackId,
        name: `Organizacion ${fallbackId}`
      }
    );
  }
}
