import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularModule } from './modules/angular/angular.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditableComponent } from './components/editable/editable.component';
import { ViewModeDirective } from './directives/viewmode.directive';
import { EditModeDirective } from './directives/editmode.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent,
    EditableComponent, ViewModeDirective, EditModeDirective],
  imports: [
    CommonModule,
    AngularModule
  ],
  exports: [
    AngularModule,
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    EditableComponent,
    ReactiveFormsModule,
    FormsModule,
    ViewModeDirective,
    EditModeDirective
  ]
})
export class SharedModule { }
