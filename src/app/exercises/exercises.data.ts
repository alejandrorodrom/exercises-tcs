export interface ExerciseDefinition {
  id: string;
  titulo: string;
  tiempoEstimado: string;
  instruccion: string;
}

export const EXERCISES: ExerciseDefinition[] = [
  {
    id: 'rxjs',
    titulo: 'Ejercicio 1 (10 min): RxJS + 2 servicios',
    tiempoEstimado: '10 min',
    instruccion: 'Conecta el flujo codigo -> organizacion -> usuarios y refleja estados de UI.'
  },
  {
    id: 'directivas',
    titulo: 'Ejercicio 2 (10 min): Directivas en template',
    tiempoEstimado: '10 min',
    instruccion: 'Implementa la directiva y valida el renderizado segun la condicion recibida.'
  },
  {
    id: 'signals',
    titulo: 'Ejercicio 3 (10 min): Signals + estado local',
    tiempoEstimado: '10 min',
    instruccion: 'Separa estado mutable y derivado usando primitives reactivas de Angular.'
  },
  {
    id: 'forms',
    titulo: 'Ejercicio 4 (10 min): Formulario reactivo basico',
    tiempoEstimado: '10 min',
    instruccion: 'Construye el formulario, valida campos y controla el envio segun su estado.'
  }
];
