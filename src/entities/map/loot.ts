import { Loot } from '../extendable/loot';
import { TERRAIN_CELLS } from './terrain';

export const TERRAIN_LOOT_SETS: Record<keyof typeof TERRAIN_CELLS, Loot[]> = {
  Beach: [
    {
      amount: [2, 5],
      chance: 0.24,
      id: 'HealPotion',
    },
  ],
  Field: [],
  Forest: [],
  Meadow: [],
  Mountain: [],
  Ocean: [],
  Volcano: [],
};
