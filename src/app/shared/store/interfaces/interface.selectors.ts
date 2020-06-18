import { INTERFACE_STATE } from './consts';
import { InterfaceStore } from './interface.store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectQasState = createFeatureSelector<InterfaceStore>(INTERFACE_STATE);
export const selectShowSpinner = createSelector(selectQasState, (state: InterfaceStore) => state.InterfaceState.showSpinner);
