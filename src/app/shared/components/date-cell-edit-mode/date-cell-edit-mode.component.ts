import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-cell-edit-mode',
  templateUrl: './date-cell-edit-mode.component.html',
  styleUrls: ['./date-cell-edit-mode.component.scss']
})
export class DateCellEditModeComponent implements OnInit {

  @Input() form: FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
