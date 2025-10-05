import { configureStore } from '@reduxjs/toolkit';

import { gameReducer, gamesListener } from 'entities/game';

export const store = configureStore({
  reducer: { game: gameReducer },
  middleware: getDefault => getDefault().prepend(gamesListener.middleware),
});
