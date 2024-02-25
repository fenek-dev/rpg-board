import { Loot } from '../extendable/loot';
import { TERRAIN_CELLS } from './terrain';

export const TERRAIN_LOOT_SETS: Record<keyof typeof TERRAIN_CELLS, Loot[]> = {
  BanditCamp: [],
  Beach: [
    {
      amount: 1,
      chance: 1,
      id: 'HeavenFruit',
    },
    {
      amount: [1, 3],
      chance: 20,
      id: 'Coconut',
    },
    {
      amount: [1, 5],
      chance: 50,
      id: 'Oyster',
    },
  ],
  Desert: [],
  Field: [
    {
      amount: 1,
      chance: 0.25,
      id: 'HeavenFruit',
    },
    {
      amount: [3, 6],
      chance: 60,
      id: 'Peanut',
    },
  ],
  Forest: [
    {
      amount: 1,
      chance: 2,
      id: 'HeavenFruit',
    },
    {
      amount: [2, 4],
      chance: 50,
      id: 'Apple',
    },
    {
      amount: [5, 15],
      chance: 75,
      id: 'Berry',
    },
    {
      amount: [1, 3],
      chance: 20,
      id: 'Peanut',
    },
  ],
  Graveyard: [],
  Meadow: [],
  Mountain: [],
  Ruins: [],
  SpiderForest: [],
  Start: [],
  Village: [],
  Volcano: [],
};
