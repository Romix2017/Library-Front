import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GenresDTO } from '../repository/DTO/GenresDTO';
import { getAllGenres, deleteGenre, addGenre, updateGenre } from '../store/genres/genres.actions';
import { selectGenres } from '../store/genres/genres.selectors';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private store: Store) { }
  getAllGenres(): Observable<GenresDTO[]> {
    this.store.dispatch(getAllGenres());
    return this.store.pipe(
      select(selectGenres));
  }
  deleteGenre(id: number): void {
    this.store.dispatch(deleteGenre({ genreId: id }));
  }
  addGenre(genre: GenresDTO): void {
    this.store.dispatch(addGenre({ genre: genre }));
  }
  updateGenre(genre: GenresDTO): void {
    this.store.dispatch(updateGenre({ genre: genre }));
  }
}
