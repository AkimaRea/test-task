import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useAppDispatch } from "shared/lib/store";
import { gameActions } from "../model/slice";
import { Game } from "../model/types";

export const useLoadGames = () => {
  const data = useLoaderData() as Game[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(gameActions.setAll(data));
  }, [data, dispatch]);
};
