import { Component, OnInit, ContentChild, EventEmitter, Output, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Subject, fromEvent, pipe } from 'rxjs';
import { filter, take, switchMapTo } from 'rxjs/operators';
import { ViewModeDirective } from '../../directives/viewmode.directive';
import { EditModeDirective } from '../../directives/editmode.directive';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { CellViewModeComponent } from '../cell-view-mode/cell-view-mode.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
@UntilDestroy()
export class EditableComponent implements OnInit {

  @Input() cellName: string;
  @Input() form: FormControl;
  @Output() update = new EventEmitter();
  editMode: boolean = false;
  @Input() dateForm: boolean = false;
  @Input() textForm: boolean = false;
  constructor(private host: ElementRef) {
  }

  ngOnInit() {
    this.viewModeHandler();
    this.editModeHandler();
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() {
    fromEvent(this.element, 'dblclick').pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.editMode = true;
    });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false))
    clickOutside$.pipe(
      untilDestroyed(this)
    ).subscribe(event => {
      if (this.editMode == true) {
        this.editMode = false;
        this.update.next();
      }
    });
  }
  ngOnDestroy() {
  }
}
