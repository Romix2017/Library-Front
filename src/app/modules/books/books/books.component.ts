import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllBooks } from '../../../shared/store/books/books.actions';
import { BooksService } from '../../../shared/services/books.service';
import { Subscription } from 'rxjs';
import { BooksDTO } from '../../../shared/repository/DTO/BooksDTO';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, delay } from 'rxjs/operators';
import { DELETE } from '../../../shared/const/sharedConsts';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GenresService } from '../../../shared/services/genres.service';
import { GenresDTO } from '../../../shared/repository/DTO/GenresDTO';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[];
  data: BooksDTO[] = [];
  private booksSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  isDeleteVisible = true;
  isAddVisible = true; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  controls: FormArray;
  genresItems: Observable<GenresDTO[]>;

  constructor(private booksService: BooksService,
    private authService: AuthService,
    private genresService: GenresService,
    public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.genresItems = this.genresService.getAllGenres();
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.booksService.getAllBooks()
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
            name: new FormControl(entity.name, Validators.required),
            author: new FormControl(entity.author, Validators.required),
            publishingDate: new FormControl(entity.publishingDate, Validators.required),
            genresId: new FormControl(entity.genresId),
            genresName: new FormControl(entity.genresName),
            notation: new FormControl(entity.notation)
          }, { updateOn: "blur" })
        });
        this.controls = new FormArray(toGroups);
      })
  }
  setDisplayedColumns(isDisplayDelete): string[] {
    let res: string[];
    if (isDisplayDelete) {
      res = ['id', 'name', 'author', 'publishingDate', 'genresName', 'notation', 'delete'];
    } else {
      res = ['id', 'name', 'author', 'publishingDate', 'genresName', 'notation'];
    }
    return res;
  }
  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      let myBook = this.controls.at(index).value as BooksDTO;
      this.booksService.updateBook(myBook);
    }
  }
  getControl(index, fieldName) {
    return this.controls.at(index).get(fieldName) as FormControl;
  }
  ngOnInit(): void {
    this.deleteIcon = DELETE;
    this.isAddVisible = this.authService.isAdmin();
    this.isDeleteVisible = this.authService.isAdmin();
    this.displayedColumns = this.setDisplayedColumns(this.isDeleteVisible);
  }
  ngOnDestroy(): void {
  }
  deleteItem(id: number): void {
    this.booksService.deleteBook(id);
  }
  addNewBook(): void {
    let newBook = new BooksDTO();
    let dialogRef: MatDialogRef<AddDialogComponent, BooksDTO> = this.dialog.open(AddDialogComponent, {
      width: '300px',
      data: newBook
    });
    dialogRef.afterClosed().subscribe(book => {
      this.booksService.addBook(book);
    })
  }
}
