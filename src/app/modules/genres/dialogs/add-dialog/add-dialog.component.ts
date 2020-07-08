import { Component, OnInit, Inject } from '@angular/core';
import { GenresDTO } from '../../../../shared/repository/DTO/GenresDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, GenresDTO>,
    @Inject(MAT_DIALOG_DATA) public data: GenresDTO) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }

}
