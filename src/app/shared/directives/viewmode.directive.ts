import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[viewMode]',
  exportAs: 'viewModeDirective'
})
export class ViewModeDirective {
  constructor(public tpl: TemplateRef<any>) {
  }
}
