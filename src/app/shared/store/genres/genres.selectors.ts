import { GENRES_STATE } from './consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GenresStore } from './genres.store';

export const selectGenresState = createFeatureSelector<GenresStore>(GENRES_STATE);
export const selectGenres = createSelector(selectGenresState, (state: GenresStore) => state.GenresState);

