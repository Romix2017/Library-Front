import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[editMode]',
  exportAs: 'editModeDirective'
})
export class EditModeDirective {
  constructor(public tpl: TemplateRef<any>) {
  }
}
