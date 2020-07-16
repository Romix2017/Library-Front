import { Component, OnInit, Inject } from '@angular/core';
import { BooksHistoryDTO } from '../../../../shared/repository/DTO/BooksHistoryDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../../../shared/services/users.services';
import { BooksService } from '../../../../shared/services/books.service';
import { BooksDTO } from '../../../../shared/repository/DTO/BooksDTO';
import { UsersDTO } from '../../../../shared/repository/DTO/UsersDTO';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  booksItems: Observable<BooksDTO[]>;
  usersItems: Observable<UsersDTO[]>;
  private formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, BooksHistoryDTO>,
    private usersService: UsersService,
    private booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: BooksHistoryDTO) {
  }

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
    this.booksItems = this.booksService.getAllBooksStripped();
    this.usersItems = this.usersService.getAllUsersStripped();
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      booksId: new FormControl(this.data.booksId, Validators.required),
      usersId: new FormControl(this.data.usersId, Validators.required),
      dateGiven: new FormControl(this.data.dateGiven, Validators.required),
      dateReturned: new FormControl(this.data.dateReturned),
      notes: new FormControl(this.data.notes),
    }, { updateOn: "blur" })
  }
  getControl(fieldName) {
    return this.formGroup.get(fieldName) as FormControl;
  }
}
