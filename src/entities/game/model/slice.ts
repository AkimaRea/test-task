import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Game, GamesState } from './types';

const initialState: GamesState = {
  items: [],
  providerFilter: null,
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setAll: (store, action: PayloadAction<Game[]>) => {
      store.items = action.payload;
    },
    toggleActive: (store, action: PayloadAction<number>) => {
      const game = store.items.find(el => el.id === action.payload);
      if (game) game.isActive = !game.isActive;
    },
    setProviderFilter: (store, action: PayloadAction<string | null>) => {
      store.providerFilter = action.payload;
    },
    resetProviderFilter: store => {
      store.providerFilter = null;
    },
  },
});

export const gameReducer = slice.reducer;
export const gameActions = slice.actions;
