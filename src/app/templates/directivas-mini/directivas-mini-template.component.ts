import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CanAccessDirective } from './directives/can-access.directive';

@Component({
  selector: 'app-directivas-template',
  imports: [CommonModule, CanAccessDirective],
  template: `
    <main class="page">
      <h1>Template Directivas (10 min)</h1>
      <p>Objetivo: usar una directiva estructural para permisos.</p>

      <button (click)="toggleRole()">Cambiar rol actual ({{ role }})</button>

      <section *appCanAccess="role === 'admin'" class="card">
        Zona visible solo para admin.
      </section>

      <p><strong>TODO:</strong> validar que el contenido se muestre/oculte segun el rol activo.</p>
    </main>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 24px; }
    .card { margin-top: 12px; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px; }
  `]
})
export class DirectivasTemplateComponent {
  role: 'admin' | 'viewer' = 'viewer';

  toggleRole(): void {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - El boton cambia el rol actual.
     * - El cambio de rol impacta visualmente el bloque protegido.
     */
  }
}
