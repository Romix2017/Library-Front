import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { USERS_STATE } from './consts';
import { UsersReducers } from './users.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';
import { UsersErrorEffect } from './usersErrorEffects';
import { UsersSuccessEffect } from './usersSuccessEffects';

@NgModule({
  imports: [
    StoreModule.forFeature(USERS_STATE, UsersReducers),
    EffectsModule.forFeature([UsersEffects, UsersErrorEffect, UsersSuccessEffect])
  ]
})
export class UsersModule { }
