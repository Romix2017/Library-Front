import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';
import { MainModule } from '../../modules/main/main.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    SharedModule,
    DefaultRoutingModule
  ],
  exports: [DefaultComponent]
})
export class DefaultModule { }
