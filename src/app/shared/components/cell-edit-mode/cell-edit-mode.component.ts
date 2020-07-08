import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cell-edit-mode',
  templateUrl: './cell-edit-mode.component.html',
  styleUrls: ['./cell-edit-mode.component.scss']
})
export class CellEditModeComponent implements OnInit {

  @Input() form: FormControl
  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
  }

}
