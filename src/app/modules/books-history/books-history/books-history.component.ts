import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksHistoryDTO } from '../../../shared/repository/DTO/BooksHistoryDTO';
import { Subscription, merge, of as observableOf } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksHistoryService } from '../../../shared/services/books-history.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { DELETE } from '../../../shared/const/sharedConsts';
import { AddDialogComponent } from '../../books-history/dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-books-history',
  templateUrl: './books-history.component.html',
  styleUrls: ['./books-history.component.scss']
})
export class BooksHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'booksId', 'usersId', 'dateGiven', 'dateReturned', 'notes', 'delete'];
  data: BooksHistoryDTO[] = [];
  private booksSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  controls: FormArray;
  constructor(private booksHistoryService: BooksHistoryService, public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.booksHistoryService.getAllBooksHistory()
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.data = data;
        const toGroups = this.data.map(entity => {
          return new FormGroup({
            id: new FormControl(entity.id),
            booksId: new FormControl(entity.booksId, Validators.required),
            usersId: new FormControl(entity.usersId, Validators.required),
            dateGiven: new FormControl(entity.dateGiven, Validators.required),
            dateReturned: new FormControl(entity.dateReturned),
            notes: new FormControl(entity.notes)
          }, { updateOn: "blur" })
        });
        this.controls = new FormArray(toGroups);
      })
  }
  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      let myBook = this.controls.at(index).value as BooksHistoryDTO;
      this.booksHistoryService.updateBookHistory(myBook);
    }
  }
  getControl(index, fieldName) {
    return this.controls.at(index).get(fieldName) as FormControl;
  }
  ngOnInit(): void {
    this.deleteIcon = DELETE;
  }
  ngOnDestroy(): void {
  }
  deleteItem(id: number): void {
    this.booksHistoryService.deleteBookHistory(id);
  }
  addNewBookHistory(): void {
    let newBookHistory = new BooksHistoryDTO();
    let dialogRef: MatDialogRef<AddDialogComponent, BooksHistoryDTO> = this.dialog.open(AddDialogComponent, {
      width: '300px',
      data: newBookHistory
    });
    dialogRef.afterClosed().subscribe(book => {
      this.booksHistoryService.addBookHistory(book);
    })
  }
}
