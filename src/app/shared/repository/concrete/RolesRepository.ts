import { RolesDTO } from '../DTO/RolesDTO';
import { Repository } from './Repository';
import { IRolesRepository } from '../contracts/IRolesRepository';

export class RolesRepository extends Repository<RolesDTO> implements IRolesRepository {
}
