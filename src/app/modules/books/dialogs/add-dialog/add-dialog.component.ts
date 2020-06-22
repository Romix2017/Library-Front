import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksDTO } from '../../../../shared/repository/DTO/BooksDTO';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, BooksDTO>,
    @Inject(MAT_DIALOG_DATA) public data: BooksDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit() {
  }
}
