import { createReducer, on, Action } from '@ngrx/store';
import { initialState, GenresStore } from './genres.store';
import * as GenresActions from './genres.actions';

const Reducers = createReducer(
  initialState,
  on(GenresActions.GenreCreatedSuccessfully, (state: GenresStore, { payload }) => ({
    ...state,
    GenresState: [
      ...state.GenresState,
      payload.genre]
  })),
  on(GenresActions.AllGenresLoadedSuccessfully, (state: GenresStore, { payload }) => (
    {
      ...state,
      GenresState: payload.genres
    })),
  on(GenresActions.GenreDeletedSuccessfully, (state: GenresStore, { payload }) => ({
    ...state,
    GenresState: state.GenresState.filter(val => val.id !== payload.genreId)
  })),
  on(GenresActions.GenreUpdatedSuccessfully, (state: GenresStore, { payload }) => ({
    ...state,
    GenresState: state.GenresState.map(x => {
      if (x.id == payload.genre.id) { x = payload.genre }
      return x;
    })
  })),
  on(GenresActions.GenresLoadError, (state: GenresStore) => (
    {
      ...state,
      GenresState: []
    }
  ))
);

export function GenresReducers(state: GenresStore | undefined, action: Action) {
  return Reducers(state, action);
}
