import { GENRES_STATE } from './consts';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GenresReducers } from './genres.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GenresEffects } from './genres.effects';
import { GenresErrorEffect } from './genresErrorEffects';
import { GenresSuccessEffect } from './genresSuccessEffects';

@NgModule({
  imports: [
    StoreModule.forFeature(GENRES_STATE, GenresReducers),
    EffectsModule.forFeature([GenresEffects, GenresErrorEffect, GenresSuccessEffect])
  ]
})
export class GenresModule { }
