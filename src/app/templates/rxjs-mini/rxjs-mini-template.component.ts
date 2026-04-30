import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrganizationService } from './services/organization.service';
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
        <strong>RESULTADO ESPERADO:</strong> al cambiar el codigo, se consulta la organizacion y se
        muestra su lista de usuarios con estados de carga y error.
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

  constructor(
    private readonly usersService: UsersService,
    private readonly organizationService: OrganizationService
  ) {
    this.setupStream();
  }

  private setupStream(): void {
    /**
     * RESULTADO ESPERADO:
     * - Reaccionar a cambios del codigo de organizacion.
     * - Resolver el flujo organizacion -> usuarios.
     * - Reflejar loading, error y resultados en la UI.
     * - Evitar suscripciones activas al destruir el componente.
     */
    void this.usersService;
    void this.organizationService;
  }

  /**
   * EJEMPLO UI ESPERADA:
   * - Al iniciar o cambiar codigo: aparece "Cargando...".
   * - Si la consulta falla: aparece mensaje de error.
   * - Si la consulta es correcta: se muestra lista de usuarios.
   */
}
