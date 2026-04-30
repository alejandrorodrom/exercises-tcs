import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { exerciseById } from './exercises.data';

@Component({
  selector: 'app-exercise-detail',
  imports: [CommonModule, RouterLink],
  template: `
    <main class="page">
      <a class="back" routerLink="/">Volver al listado</a>

      @if (exercise(); as selectedExercise) {
        <section class="header">
          <h1>{{ selectedExercise.titulo }}</h1>
          <p><strong>Objetivo:</strong> {{ selectedExercise.objetivo }}</p>
          <span class="badge">Tiempo estimado: {{ selectedExercise.tiempoEstimado }}</span>
          <a
            class="open-template"
            [routerLink]="selectedExercise.id ? ['/templates', selectedExercise.id] : ['/']"
          >
            Abrir template para desarrollar
          </a>
        </section>

        <section class="content">
          <article class="card">
            <h2>Stack esperado</h2>
            <ul>
              @for (item of selectedExercise.stack; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="card">
            <h2>Objetivos de evaluacion</h2>
            <ul>
              @for (item of selectedExercise.criterios; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="card">
            <h2>Extras (bonus)</h2>
            <ul>
              @for (item of selectedExercise.extras; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>
        </section>
      } @else {
        <section class="card">
          <h2>Ejercicio no encontrado</h2>
          <p>Revisa el identificador de la ruta.</p>
        </section>
      }
    </main>
  `,
  styles: [`
    .page {
      max-width: 900px;
      margin: 0 auto;
      padding: 24px;
      display: grid;
      gap: 16px;
    }
    .back {
      width: fit-content;
      text-decoration: none;
      color: #2563eb;
      font-weight: 600;
    }
    .header h1 {
      margin: 0 0 8px;
      font-size: 30px;
    }
    .header p {
      margin: 0 0 8px;
      color: #374151;
    }
    .badge {
      font-size: 14px;
      color: #4b5563;
    }
    .open-template {
      display: inline-block;
      margin-top: 10px;
      text-decoration: none;
      color: #1d4ed8;
      font-weight: 600;
    }
    .content {
      display: grid;
      gap: 12px;
    }
    .card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 14px;
    }
    .card h2 {
      margin: 0 0 8px;
      font-size: 18px;
    }
    .card ul {
      margin: 0;
      padding-left: 18px;
    }
    .card li {
      margin-bottom: 6px;
    }
  `]
})
export class ExerciseDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly exerciseId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id'))),
    { initialValue: null }
  );

  readonly exercise = computed(() => exerciseById(this.exerciseId() ?? null));
}
