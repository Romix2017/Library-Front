import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './shared/store/books/books.module';
import { InterfaceModule } from './shared/store/interfaces/interface.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { RolesModule } from './shared/store/roles/roles.module';
import { GenresModule } from './shared/store/genres/genres.module';
import { UsersModule } from './shared/store/users/users.module';
import { BooksHistoryModule } from './shared/store/books-history/books-history.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BooksModule,
    RolesModule,
    UsersModule,
    BooksHistoryModule,
    InterfaceModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    GenresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
