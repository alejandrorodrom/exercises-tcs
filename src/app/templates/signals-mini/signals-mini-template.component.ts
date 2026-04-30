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
        <strong>RESULTADO ESPERADO:</strong> completar la pantalla para que el valor derivado y el tick
        desde una fuente reactiva externa se actualicen en tiempo real.
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
     * RESULTADO ESPERADO:
     * - Derivar este valor directamente del estado local.
     * - Mantener una salida coherente con el valor actual del contador.
     */
    return 0;
  });
  /**
   * RESULTADO ESPERADO:
   * - Representar un valor que cambie automaticamente en el tiempo.
   * - Usar una fuente observable y exponer su valor en template mediante un signal.
   * - Verificar que el valor visible cambie sin interaccion con botones.
   */
  readonly tick = signal('--');

  increment(): void {
    /**
     * RESULTADO ESPERADO:
     * - Actualizar el estado local del contador en una unidad positiva.
     */
  }

  decrement(): void {
    /**
     * RESULTADO ESPERADO:
     * - Actualizar el estado local del contador en una unidad negativa.
     */
  }

  /**
   * EJEMPLO UI ESPERADA:
   * - Al hacer click en botones, el contador cambia y el doble se actualiza.
   * - El tick cambia automaticamente con el tiempo sin clicks.
   */
}
