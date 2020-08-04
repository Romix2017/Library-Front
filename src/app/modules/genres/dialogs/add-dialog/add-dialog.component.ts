import { Component, OnInit, Inject } from '@angular/core';
import { GenresDTO } from '../../../../shared/repository/DTO/GenresDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  private formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, GenresDTO>,
    @Inject(MAT_DIALOG_DATA) public data: GenresDTO) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.dialogRef.close(this.data);
    }
  }
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, Validators.required)
    }, { updateOn: "blur" })
  }
  getControl(fieldName) {
    return this.formGroup.get(fieldName) as FormControl;
  }
}
