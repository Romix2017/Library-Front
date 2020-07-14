import { Component, OnInit, Inject } from '@angular/core';
import { BooksHistoryDTO } from '../../../../shared/repository/DTO/BooksHistoryDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, BooksHistoryDTO>,
    @Inject(MAT_DIALOG_DATA) public data: BooksHistoryDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit() {
  }

}
