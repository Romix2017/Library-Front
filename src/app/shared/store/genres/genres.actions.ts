import { createAction, props } from '@ngrx/store';
import { GenresDTO } from '../../repository/DTO/GenresDTO';

export const addGenre = createAction("[Genre Page] Add genre", props<{ genre: GenresDTO }>());
export const deleteGenre = createAction("[Genre Page] Delete genre", props<{ genreId: number }>());
export const getAllGenres = createAction("[Genre Page] Get all genre");
export const updateGenre = createAction("[Genre Page] Update genre", props<{ genre: GenresDTO }>());
export const AllGenresLoadedSuccessfully = createAction("[Genre API] Genres loaded Success", props<{ payload: { genres: GenresDTO[] } }>());
export const GenreDeletedSuccessfully = createAction("[Genre API] Genre deleted successfully", props<{ payload: { genreId: number } }>());
export const GenreCreatedSuccessfully = createAction("[Genre API] Genre created successfully", props<{ payload: { genre: GenresDTO } }>());
export const GenreUpdatedSuccessfully = createAction("[Genre API] Genre updated successfully", props<{ payload: { genre: GenresDTO } }>());
export const GenresLoadError = createAction("[Genres API] Genres load error");
export const GenresDeleteError = createAction("[Genres API] Genres delete error");
export const GenresUpdateError = createAction("[Genres API] Genres update error");
export const GenresCreateError = createAction("[Genres API] Genres create error");
