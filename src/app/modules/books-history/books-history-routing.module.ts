import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHistoryModule } from './books-history.module';
import { BooksHistoryComponent } from './books-history/books-history.component';


const routes: Routes = [
  { path: '', component: BooksHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksHistoryRoutingModule { }
