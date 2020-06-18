import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { INTERFACE_STATE } from './consts';
import { InterfaceReducers } from './interface.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(INTERFACE_STATE, InterfaceReducers)
  ]
})
export class InterfaceModule { }
