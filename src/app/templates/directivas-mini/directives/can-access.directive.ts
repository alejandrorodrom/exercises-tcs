import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCanAccess]'
})
export class CanAccessDirective {
  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  @Input() set appCanAccess(hasAccess: boolean) {
    /**
     * TODO CANDIDATO:
     * Resultado esperado:
     * - Si hay acceso, renderiza contenido.
     * - Si no hay acceso, no renderiza contenido.
     */
    void hasAccess;
    void this.templateRef;
    this.viewContainer.clear();
  }
}
