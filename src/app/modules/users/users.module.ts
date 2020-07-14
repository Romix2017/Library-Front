import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, AddDialogComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
