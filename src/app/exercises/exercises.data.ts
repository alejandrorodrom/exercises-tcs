export interface ExerciseDefinition {
  id: string;
  titulo: string;
  objetivo: string;
  tiempoEstimado: string;
  stack: string[];
  criterios: string[];
  extras: string[];
}

export const EXERCISES: ExerciseDefinition[] = [
  {
    id: 'rxjs',
    titulo: 'Ejercicio 1 (10 min): RxJS + 2 servicios',
    objetivo:
      'Implementar un flujo simple donde se obtiene una organizacion y luego sus usuarios. Debe justificar el operador elegido y manejar desuscripcion con cualquier estrategia valida.',
    tiempoEstimado: '10 min',
    stack: ['Observables', 'operadores RxJS', 'takeUntilDestroyed', 'catchError'],
    criterios: [
      'Conecta correctamente dos servicios dependientes.',
      'Usa un operador RxJS correcto y lo explica brevemente.',
      'Maneja loading + error de forma basica.'
    ],
    extras: ['Bonus: agrega cancelacion explicita al cambiar filtro.']
  },
  {
    id: 'directivas',
    titulo: 'Ejercicio 2 (10 min): Directivas en template',
    objetivo:
      'Crear una directiva estructural simple (*appCanAccess) y aplicarla en template para mostrar/ocultar una seccion.',
    tiempoEstimado: '10 min',
    stack: ['TemplateRef', 'ViewContainerRef', 'microsyntax'],
    criterios: [
      'La directiva renderiza correctamente segun condicion.',
      'Uso limpio en el template.',
      'Codigo legible y tipado basico.'
    ],
    extras: ['Bonus: pasa un contexto simple al template.']
  },
  {
    id: 'signals',
    titulo: 'Ejercicio 3 (10 min): Signals + estado local',
    objetivo:
      'Implementar un contador/filtro con signal y computed, consumiendo al menos un dato desde un observable via toSignal.',
    tiempoEstimado: '10 min',
    stack: ['signal', 'computed', 'toSignal'],
    criterios: [
      'Separa correctamente estado mutable y derivado.',
      'No usa side effects en computed.',
      'Interoperabilidad minima RxJS -> Signal.'
    ],
    extras: ['Bonus: exponer el signal como observable con toObservable.']
  },
  {
    id: 'forms',
    titulo: 'Ejercicio 4 (10 min): Formulario reactivo basico',
    objetivo:
      'Completar un formulario reactivo para alta de candidato con validaciones minimas y mostrar mensajes de error en template.',
    tiempoEstimado: '10 min',
    stack: ['ReactiveFormsModule', 'FormBuilder', 'Validators'],
    criterios: [
      'Define el FormGroup con campos requeridos.',
      'Muestra errores solo cuando el campo fue tocado.',
      'Deshabilita submit cuando el formulario es invalido.'
    ],
    extras: ['Bonus: resetear formulario despues de enviar.']
  }
];

export const exerciseById = (id: string | null): ExerciseDefinition | undefined =>
  EXERCISES.find((exercise) => exercise.id === id);
