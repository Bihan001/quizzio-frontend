import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';
import dialogVisibility from './slices/dialog-visibility';
import confirmationDialog from './slices/confirmation-dialog';
export default configureStore({
  reducer: {
    auth,
    dialogVisibility,
    confirmationDialog,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
