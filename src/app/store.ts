import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from 'features/settings/settingsSlice';
import gameReducer from 'features/game/gameSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
