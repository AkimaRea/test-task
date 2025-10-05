export interface Game {
  id: number;
  title: string;
  provider: string;
  image: string;
  isActive: boolean;
}

export type GamesState = {
  items: Game[];
  providerFilter: string | null;
};
