import { store } from 'app/providers/store';

declare global {
  type AppStore = typeof store;
  type RootState = ReturnType<AppStore['getState']>;
  type AppDispatch = AppStore['dispatch'];
}

export {};
