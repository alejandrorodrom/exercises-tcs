import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXERCISES } from './exercises.data';

@Component({
  selector: 'app-exercise-home',
  imports: [CommonModule, RouterLink],
  template: `
    <main class="page">
      <section class="hero">
        <h1>Prueba tecnica Angular semi senior</h1>
        <p>
          Este proyecto contiene ejercicios independientes. Puedes asignarlos por separado para
          evitar bloqueos entre retos.
        </p>
      </section>

      <section class="grid">
        @for (exercise of exercises; track exercise.id) {
          <article class="card">
            <h2>{{ exercise.titulo }}</h2>
            <p>{{ exercise.objetivo }}</p>
            <div class="meta">
              <span>Tiempo: {{ exercise.tiempoEstimado }}</span>
            </div>
            <a [routerLink]="['/ejercicios', exercise.id]">Ver ejercicio</a>
          </article>
        }
      </section>
    </main>
  `,
  styles: [`
    .page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 24px;
    }
    .hero {
      margin-bottom: 24px;
    }
    .hero h1 {
      margin: 0 0 8px;
      font-size: 32px;
    }
    .hero p {
      margin: 0;
      color: #374151;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }
    .card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .card h2 {
      margin: 0;
      font-size: 18px;
    }
    .card p {
      margin: 0;
      color: #374151;
    }
    .meta {
      color: #4b5563;
      font-size: 14px;
    }
    .card a {
      width: fit-content;
      text-decoration: none;
      color: #2563eb;
      font-weight: 600;
    }
  `]
})
export class ExerciseHomeComponent {
  readonly exercises = EXERCISES;
}
