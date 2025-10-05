import { createSelector } from '@reduxjs/toolkit';

import { SelectOption } from 'shared/ui';

export const selectAllGames = (s: RootState) => s.game.items;
export const selectProviderFilter = (s: RootState) => s.game.providerFilter;

export const selectVisibleGames = createSelector([selectAllGames, selectProviderFilter], (games, filter) =>
  games.filter(g => g.isActive && (!filter || g.provider === filter)),
);

export const selectAdminGames = createSelector([selectAllGames, selectProviderFilter], (games, filter) =>
  games.filter(g => !filter || filter === 'all' || g.provider === filter),
);

export const selectProviders = createSelector([selectAllGames], items => {
  const set = new Set<string>();
  for (const g of items) if (g.provider) set.add(g.provider);
  return Array.from(set).sort();
});

export const selectProviderOptions = createSelector([selectProviders], (providers): SelectOption[] =>
  providers.map(p => ({ value: p, label: p })),
);

// Возвращает стабильный объект, пока filter не меняется
export const selectProviderFilterOption = createSelector(
  [selectProviderFilter],
  (filter): SelectOption => (filter ? { value: filter, label: filter } : { value: '', label: '' }),
);
