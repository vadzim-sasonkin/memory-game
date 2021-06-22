import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './game.slice';
import { cardsReducer } from './cards.slice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
