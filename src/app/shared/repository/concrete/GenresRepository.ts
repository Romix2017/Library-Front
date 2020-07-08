import { GenresDTO } from '../DTO/GenresDTO';
import { Repository } from './Repository';
import { IGenresRepository } from '../contracts/IGenresRepository';

export class GenresRepository extends Repository<GenresDTO> implements IGenresRepository {
}
