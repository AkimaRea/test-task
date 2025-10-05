import { gamesLoader, selectVisibleGames, useLoadGames } from "entities/game";
import { useSelector } from "react-redux";
import { RouteObject } from "react-router";
import { Section } from "shared/ui";
import { ProvidersGames, SelectProvider } from "widgets";

export const VitrinePage = () => {
  useLoadGames();
  const games = useSelector(selectVisibleGames);

  return (
    <Section>
      <SelectProvider />
      <ProvidersGames games={games} />
    </Section>
  );
};

export const VitrineRoute = {
  index: true,
  path: "/",
  element: <VitrinePage />,
  loader: gamesLoader,
} as RouteObject;
