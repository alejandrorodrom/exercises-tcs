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
        <strong>Objetivo del ejercicio:</strong> implementar un flujo RxJS donde el codigo ingresado
        obtenga una organizacion y luego su lista de usuarios.
      </p>
      <p>
        <strong>Instrucciones:</strong> actualizar estados de <em>loading</em>, <em>error</em> y
        resultados en users, y justificar en un comentario breve por que se eligio ese operador.
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
     * INSTRUCCIONES:
     * - Leer el codigo de organizacion desde el FormControl y reaccionar a cada cambio.
     * - Consultar primero la organizacion y, con ese resultado, obtener sus usuarios.
     * - Actualizar la UI con tres estados: cargando, error y listado de resultados.
     * - Limpiar resultados anteriores cuando el flujo lo requiera para evitar datos inconsistentes.
     * - Asegurar que no queden suscripciones activas al destruir el componente.
     * - Documentar en 1 o 2 lineas la estrategia elegida para el flujo reactivo.
     *
     * Nota: usersService y organizationService se mantienen inyectados
     * para usarlos en la implementacion.
     */
    void this.usersService;
    void this.organizationService;
  }
}
