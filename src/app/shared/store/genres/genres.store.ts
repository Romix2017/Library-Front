import { GenresDTO } from '../../repository/DTO/GenresDTO';

export interface GenresStore {
  GenresState: GenresDTO[];
}
export const initialState: GenresStore = {
  GenresState: []
}
