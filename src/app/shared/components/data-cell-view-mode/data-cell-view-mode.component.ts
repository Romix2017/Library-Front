import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-cell-view-mode',
  templateUrl: './data-cell-view-mode.component.html',
  styleUrls: ['./data-cell-view-mode.component.scss']
})
export class DataCellViewModeComponent implements OnInit {
  @Input() cellName: string;
  @Input() form: FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
