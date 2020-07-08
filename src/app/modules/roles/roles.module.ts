import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles/roles.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [RolesComponent, AddDialogComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
