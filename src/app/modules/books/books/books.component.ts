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

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'author', 'publishingDate', 'genresId', 'notation', 'delete'];
  data: BooksDTO[] = [];
  private booksSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private booksService: BooksService) { }
  ngAfterViewInit() {
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
      ).subscribe(data => this.data = data)
  }
  ngOnInit(): void {
    this.deleteIcon = DELETE;
  }
  ngOnDestroy(): void {
  }
  deleteItem(id: number): void {
    this.booksService.deleteBook(id);
  }
}
