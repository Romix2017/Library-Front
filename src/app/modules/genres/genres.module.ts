import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres/genres.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [GenresComponent, AddDialogComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    SharedModule
  ]
})
export class GenresModule { }
