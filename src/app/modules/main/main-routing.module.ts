import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BooksComponent } from '../books/books/books.component';
import { SuperadminGuard } from '../login/guards/superadmin.guard';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'roles', loadChildren: () => import('../../modules/roles/roles.module').then(m => m.RolesModule) },
      { path: 'users', loadChildren: () => import('../../modules/users/users.module').then(m => m.UsersModule) },
      { path: '', redirectTo: 'books' },
      { path: 'books', canActivate: [SuperadminGuard], canLoad: [SuperadminGuard], loadChildren: () => import('../../modules/books/books.module').then(m => m.BooksModule) },
      { path: 'books-history', loadChildren: () => import('../../modules/books-history/books-history.module').then(m => m.BooksHistoryModule) },
      { path: 'genres', loadChildren: () => import('../../modules/genres/genres.module').then(m => m.GenresModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
