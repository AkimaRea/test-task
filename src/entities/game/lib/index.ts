import { LoaderFunctionArgs } from 'react-router';

import { Game } from '../model/types';
import gamesData from './mock.json';

export const STORAGE_KEY = 'games_data';

export function loadGames(): Game[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Game[];
  } catch (e) {
    console.error('localStorage read error:', e);
  }
  const initial = JSON.parse(JSON.stringify(gamesData)) as Game[];
  saveGames(initial);
  return initial;
}

export function saveGames(games: Game[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
  } catch (e) {
    console.error('localStorage write error:', e);
  }
}

export function clearGames(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export async function gamesLoader(_args: LoaderFunctionArgs): Promise<Game[]> {
  return loadGames();
}
