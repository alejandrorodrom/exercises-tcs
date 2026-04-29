import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CandidateUser, UsersService } from './services/users.service';

@Component({
  selector: 'app-rxjs-template',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <main class="page">
      <h1>Template RxJS (10 min)</h1>
      <p>Objetivo: conectar 2 servicios dependientes con RxJS.</p>

      <label>
        Codigo organizacion:
        <input [formControl]="organizationCodeControl" />
      </label>

      <p>
        <strong>TODO:</strong> al cambiar el codigo, debe cargar usuarios de esa organizacion,
        reflejar estado de carga/error y explicar brevemente la estrategia elegida.
      </p>

      @if (loading) {
        <p>Cargando...</p>
      } @else if (errorMessage) {
        <p class="error">{{ errorMessage }}</p>
      } @else {
        <ul>
          @for (user of users; track user.id) {
            <li>{{ user.fullName }}</li>
          }
        </ul>
      }
    </main>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 24px; }
    .error { color: #b91c1c; }
    input { margin-left: 8px; padding: 6px; }
  `]
})
export class RxjsTemplateComponent {
  readonly organizationCodeControl = new FormControl('acme', { nonNullable: true });

  users: CandidateUser[] = [];
  loading = false;
  errorMessage = '';

  constructor(private readonly usersService: UsersService) {
    this.setupStream();
  }

  private setupStream(): void {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - Flujo funcional entre input -> organizacion -> usuarios.
     * - Estado de UI coherente (loading, error, lista).
     * - Explicacion breve de la decision tecnica.
     *
     * Nota: this.usersService se deja inyectado para que no haya warning de imports
     * mientras se completa el ejercicio.
     */
    void this.usersService;
  }
}
