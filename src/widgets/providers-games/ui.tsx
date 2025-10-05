import { Game, GamesCardControlled } from 'entities/game';
import { GamesCard } from 'entities/game/ui/games-card/ui';

import s from './styles.module.scss';

interface ProvidersGames {
  games: Game[];
  editable?: boolean;
}

export const ProvidersGames = ({ games, editable }: ProvidersGames) => {
  return (
    <div className={s.providers_games}>
      <div className={s.games}>
        {games.map(game =>
          editable ? <GamesCardControlled {...game} key={game.title} /> : <GamesCard {...game} key={game.title} />,
        )}
      </div>
    </div>
  );
};
