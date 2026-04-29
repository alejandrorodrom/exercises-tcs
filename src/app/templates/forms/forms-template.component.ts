import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-template',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <main class="page">
      <h1>Template Formularios (10 min)</h1>
      <p>Objetivo: completar un formulario reactivo simple con validaciones.</p>

      <form [formGroup]="candidateForm" (ngSubmit)="submit()">
        <label>
          Nombre
          <input type="text" formControlName="name" />
        </label>
        <p class="error">TODO: mostrar feedback de validacion cuando corresponda.</p>

        <label>
          Correo
          <input type="email" formControlName="email" />
        </label>
        <p class="error">TODO: mostrar feedback de validacion cuando corresponda.</p>

        <button type="submit">
          Enviar
          <!-- TODO CANDIDATO: agregar condicion de habilitacion del submit -->
        </button>
      </form>

      <p>
        <strong>TODO:</strong> completar el flujo para que el formulario valide, muestre errores y
        permita enviar solo cuando corresponda.
      </p>
    </main>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 24px; }
    form { display: grid; gap: 10px; max-width: 420px; }
    label { display: grid; gap: 4px; }
    input { padding: 6px; }
    .error { color: #b91c1c; font-size: 13px; margin: 0; }
  `]
})
export class FormsTemplateComponent {
  /**
   * TODO CANDIDATO:
   * Resultado esperado:
   * - Formulario funcional con validaciones.
   * - Mensajes de error consistentes.
   * - Envio controlado por el estado del formulario.
   */
  readonly candidateForm = null as never;

  submit(): void {
    // TODO CANDIDATO
  }
}
