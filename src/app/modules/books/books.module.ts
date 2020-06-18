import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { AngularModule } from '../../shared/modules/angular/angular.module';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AngularModule
  ]
})
export class BooksModule { }
