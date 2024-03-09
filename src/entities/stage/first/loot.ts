import { Loot } from '~/entities/extendable/loot';

export const FIRST_STAGE_LOOT: Loot[] = [
  {
    amount: 1,
    chance: 100,
    id: 'WoodenSword',
  },
  {
    amount: [1, 3],
    chance: 20,
    id: 'Apple',
  },
  {
    amount: 1,
    chance: 20,
    id: 'WoodenStaff',
  },
];
