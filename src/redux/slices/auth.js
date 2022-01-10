import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAndToken: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.user) state.user = action.payload.user;
      if (action.payload.token) localStorage.setItem('AUTH_TOKEN', action.payload.token);
    },
    clearUserAndToken: (state) => {
      state.user = null;
      localStorage.removeItem('AUTH_TOKEN');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserAndToken, clearUserAndToken } = authSlice.actions;

export default authSlice.reducer;
