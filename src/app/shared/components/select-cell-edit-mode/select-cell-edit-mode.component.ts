import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GenresDTO } from '../../repository/DTO/GenresDTO';
import { GenresService } from '../../services/genres.service';
import { Observable } from 'rxjs';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select-cell-edit-mode',
  templateUrl: './select-cell-edit-mode.component.html',
  styleUrls: ['./select-cell-edit-mode.component.scss']
})

export class SelectCellEditModeComponent implements OnInit {

  @Input() form: FormControl;
  @Input() keyForItem: string;
  @Input() valueForItem: string;
  @Input() title: string;
  @Input() items: Observable<any[]>;

  constructor() { }

  ngOnInit(): void {
   // this.genres = this.genresService.getAllGenres();
  }
}
