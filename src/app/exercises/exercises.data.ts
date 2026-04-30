export interface ExerciseDefinition {
  id: string;
  titulo: string;
  tiempoEstimado: string;
}

export const EXERCISES: ExerciseDefinition[] = [
  {
    id: 'rxjs',
    titulo: 'Ejercicio 1 (10 min): RxJS + 2 servicios',
    tiempoEstimado: '10 min'
  },
  {
    id: 'directivas',
    titulo: 'Ejercicio 2 (10 min): Directivas en template',
    tiempoEstimado: '10 min'
  },
  {
    id: 'signals',
    titulo: 'Ejercicio 3 (10 min): Signals + estado local',
    tiempoEstimado: '10 min'
  },
  {
    id: 'forms',
    titulo: 'Ejercicio 4 (10 min): Formulario reactivo basico',
    tiempoEstimado: '10 min'
  }
];
