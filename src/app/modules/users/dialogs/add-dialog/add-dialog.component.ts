import { Component, OnInit, Inject } from '@angular/core';
import { UsersDTO } from '../../../../shared/repository/DTO/UsersDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, UsersDTO>,
    @Inject(MAT_DIALOG_DATA) public data: UsersDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit() {
  }
}
