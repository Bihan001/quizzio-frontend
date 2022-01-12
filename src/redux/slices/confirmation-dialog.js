import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  title: '',
  content: '',
  primaryBtnText: '',
  secondaryBtnText: '',
  onPrimaryBtnClick: () => {},
  onSecondaryBtnClick: () => {},
};

export const confirmationSlice = createSlice({
  name: 'confirmation-dialog',
  initialState,
  reducers: {
    showConfirmation: (state, action) => {
      Object.keys(initialState).forEach((key) => (state[key] = action.payload[key] || initialState[key]));
      state.open = true;
    },
    hideConfirmation: (state) => {
      state.open = false;
      //   Object.keys(initialState).forEach((key) => (state[key] = initialState[key])); // Dialog close animation lags
    },
  },
});

export const { showConfirmation, hideConfirmation } = confirmationSlice.actions;

export default confirmationSlice.reducer;
