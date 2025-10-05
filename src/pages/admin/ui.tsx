import { gamesLoader, selectAdminGames, useLoadGames } from "entities/game";
import { useSelector } from "react-redux";
import { RouteObject } from "react-router";
import { Section } from "shared/ui";
import { ProvidersGames, SelectProvider } from "widgets";

export const AdminPage = () => {
  useLoadGames();
  const games = useSelector(selectAdminGames);

  return (
    <Section>
      <SelectProvider />
      <ProvidersGames
        games={games}
        editable
      />
    </Section>
  );
};

export const AdminRoute = {
  path: "/admin",
  element: <AdminPage />,
  loader: gamesLoader,
} as RouteObject;
