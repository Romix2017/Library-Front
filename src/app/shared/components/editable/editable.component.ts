import { Component, OnInit, ContentChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { filter, take, switchMapTo } from 'rxjs/operators';
import { ViewModeDirective } from '../../directives/viewmode.directive';
import { EditModeDirective } from '../../directives/editmode.directive';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
@Component({
  selector: 'editable',
  template: `
    <ng-container *ngTemplateOutlet="currentView"></ng-container>
  `,
  styleUrls: ['./editable.component.scss']
})
@UntilDestroy()
export class EditableComponent implements OnInit {

  @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;
  @Output() update = new EventEmitter();

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  mode: 'view' | 'edit' = 'view';


  constructor(private host: ElementRef) {
  }

  ngOnInit() {
    this.viewModeHandler();
    this.editModeHandler();
  }

  toViewMode() {
    this.update.next();
    this.mode = 'view';
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() {
    fromEvent(this.element, 'dblclick').pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.mode = 'edit';
      this.editMode.next(true);
    });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    )
    this.editMode$.pipe(
      switchMapTo(clickOutside$),
      untilDestroyed(this)
    ).subscribe(event => this.toViewMode());
  }
  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }
  ngOnDestroy() {
  }
}
