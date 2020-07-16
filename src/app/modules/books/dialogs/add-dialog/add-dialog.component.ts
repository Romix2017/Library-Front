import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksDTO } from '../../../../shared/repository/DTO/BooksDTO';
import { Observable } from 'rxjs';
import { GenresDTO } from '../../../../shared/repository/DTO/GenresDTO';
import { GenresService } from '../../../../shared/services/genres.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  genresItems: Observable<GenresDTO[]>;
  private formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, BooksDTO>,
    private genresService: GenresService,
    @Inject(MAT_DIALOG_DATA) public data: BooksDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.dialogRef.close(this.data);
    }
  }
  ngOnInit() {
    this.genresItems = this.genresService.getAllGenres();
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, Validators.required),
      author: new FormControl(this.data.author, Validators.required),
      publishingDate: new FormControl(this.data.publishingDate, Validators.required),
      genresId: new FormControl(this.data.genresId, Validators.required),
      notation: new FormControl(this.data.notation)
    }, { updateOn: "blur" })
  }
  getControl(fieldName) {
    return this.formGroup.get(fieldName) as FormControl;
  }
}
