interface InterfaceState {
  showSpinner: boolean;
}

export interface InterfaceStore {
  InterfaceState: InterfaceState;
}
export const initialState: InterfaceStore = {
  InterfaceState: {
    showSpinner: false
  }
}
