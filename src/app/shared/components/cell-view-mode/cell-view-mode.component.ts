import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { ViewModeDirective } from '../../directives/viewmode.directive';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cell-view-mode',
  templateUrl: './cell-view-mode.component.html',
  styleUrls: ['./cell-view-mode.component.scss']
})
export class CellViewModeComponent implements OnInit {
  @Input() cellName: string;
  @Input() form: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
