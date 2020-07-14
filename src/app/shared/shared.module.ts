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
import { CellViewModeComponent } from './components/cell-view-mode/cell-view-mode.component';
import { CellEditModeComponent } from './components/cell-edit-mode/cell-edit-mode.component';
import { DateCellEditModeComponent } from './components/date-cell-edit-mode/date-cell-edit-mode.component';
import { DataCellViewModeComponent } from './components/data-cell-view-mode/data-cell-view-mode.component';
import { SelectCellEditModeComponent } from './components/select-cell-edit-mode/select-cell-edit-mode.component';


@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    CellViewModeComponent,
    CellEditModeComponent,
    DateCellEditModeComponent,
    DataCellViewModeComponent,
    SelectCellEditModeComponent],
  imports: [
    CommonModule,
    AngularModule,
    FormsModule,
    ReactiveFormsModule
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
    EditModeDirective,
    CellViewModeComponent
  ]
})
export class SharedModule { }
