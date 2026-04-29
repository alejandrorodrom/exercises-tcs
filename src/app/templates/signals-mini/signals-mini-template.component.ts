import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-template',
  imports: [CommonModule],
  template: `
    <main class="page">
      <h1>Template Signals (10 min)</h1>
      <p>Objetivo: estado local con signal/computed y un observable convertido con toSignal.</p>

      <div class="actions">
        <button (click)="increment()">Incrementar</button>
        <button (click)="decrement()">Decrementar</button>
      </div>

      <p>Contador: {{ count() }}</p>
      <p>Doble (computed): {{ doubleCount() }}</p>
      <p>Tick desde observable: {{ tick() }}</p>

      <p>
        <strong>TODO:</strong> completar la pantalla para que el valor derivado y la fuente reactiva
        externa se actualicen correctamente.
      </p>
    </main>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 24px; }
    .actions { display: flex; gap: 8px; margin-bottom: 8px; }
  `]
})
export class SignalsTemplateComponent {
  readonly count = signal(0);
  readonly doubleCount = computed(() => {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - Este valor debe derivarse del estado local.
     */
    return 0;
  });
  readonly tick = signal('TODO: conectar una fuente reactiva externa');

  increment(): void {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - Esta accion debe modificar el estado local.
     */
  }

  decrement(): void {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - Esta accion debe modificar el estado local.
     */
  }
}
