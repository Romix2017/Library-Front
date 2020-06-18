import { createReducer, Action, on } from '@ngrx/store';
import { initialState, InterfaceStore  } from './interface.store';
import * as InterfaceActions from './interface.actions';

const Reducers = createReducer(
  initialState,
  on(InterfaceActions.setSpinnerOn, (state) => ({
    ...state,
    InterfaceState: {
      ...state.InterfaceState,
      showSpinner: true
    }
  })),
  on(InterfaceActions.setSpinnerOff, (state) => (
    {
      ...state,
      InterfaceState: {
        ...state.InterfaceState,
        showSpinner: false
      }
    }
  )))

export function InterfaceReducers(state: InterfaceStore | undefined, action: Action) {
  return Reducers(state, action);
}
