import { useSelector } from 'react-redux';
import { RouteObject } from 'react-router';

import { ProvidersGames, SelectProvider } from 'widgets';

import { gamesLoader, selectVisibleGames, useLoadGames } from 'entities/game';

import { Section } from 'shared/ui';

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
  path: '/',
  element: <VitrinePage />,
  loader: gamesLoader,
} as RouteObject;
