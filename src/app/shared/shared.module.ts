import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularModule } from './modules/angular/angular.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AngularModule
  ],
  exports: [
    AngularModule,
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
