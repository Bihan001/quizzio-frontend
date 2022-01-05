
import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';
import dialogVisibility from './slices/dialog-visibility';

export default configureStore({
  reducer: {
    auth,
    dialogVisibility,
  },
});
