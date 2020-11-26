import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from 'features/settings/settingsSlice';
import questionsReducer from 'features/questions/questionsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    questions: questionsReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
