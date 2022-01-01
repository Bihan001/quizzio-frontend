import { createSlice } from '@reduxjs/toolkit';

export const dialogNames = {
  login: 'login',
  register: 'register',
  forgotPassword: 'forgotPassword',
  registerReminder: 'registerReminder',
};

const createInitialState = (namesObj) => {
  const obj = {};
  Object.values(namesObj).map((val) => {
    obj[val] = false;
  });
  return obj;
};

export const dialogVisibilitySlice = createSlice({
  name: 'dialogVisibility',
  initialState: createInitialState(dialogNames),
  reducers: {
    enableVisibility: (state, action) => {
      const key = action.payload;
      state[key] = true;
    },
    hideVisibility: (state, action) => {
      const key = action.payload;
      state[key] = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { enableVisibility, hideVisibility } = dialogVisibilitySlice.actions;

export default dialogVisibilitySlice.reducer;
