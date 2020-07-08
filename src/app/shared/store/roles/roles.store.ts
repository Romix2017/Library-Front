import { RolesDTO } from '../../repository/DTO/RolesDTO';

export interface RolesStore {
  RolesState: RolesDTO[];
}
export const initialState: RolesStore = {
  RolesState: []
}
