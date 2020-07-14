import { UsersDTO } from '../../repository/DTO/UsersDTO';

export interface UsersStore {
  UsersState: UsersDTO[];
}
export const initialState: UsersStore = {
  UsersState: []
}
