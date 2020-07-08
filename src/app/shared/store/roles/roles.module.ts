import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { RolesReducers } from './roles.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RolesEffects } from './roles.effects';
import { RolesErrorEffect } from './rolesErrorEffects';
import { RolesSuccessEffect } from './rolesSuccessEffects';
import { ROLES_STATE } from './consts';

@NgModule({
  imports: [
    StoreModule.forFeature(ROLES_STATE, RolesReducers),
    EffectsModule.forFeature([RolesEffects, RolesErrorEffect, RolesSuccessEffect])
  ]
})
export class RolesModule { }
