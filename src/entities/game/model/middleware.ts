import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { saveGames } from "../lib";
import { gameActions } from "./slice";

export const gamesListener = createListenerMiddleware();

gamesListener.startListening({
  matcher: isAnyOf(gameActions.setAll, gameActions.toggleActive),
  effect: (_action, api) => {
    const items = (api.getState() as RootState).game.items;
    saveGames(items);
  },
});
