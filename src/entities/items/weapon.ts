import { asWeapons } from '../extendable/weapon';
import { DICES } from './dices';
import { EFFECTS } from './effects';

export const MELEE_WEAPONS = asWeapons({
  WoodenSword: {
    category: 'weapon',
    cost: 1,
    description: 'Simple wooden sword',
    effects: [
      {
        ...EFFECTS.Damage,
        dices: [DICES.d4, DICES.d4],
      },
    ],
    h: 4,
    icon: '🗡️',
    id: 'WoodenSword',
    name: 'Wooden Sword',
    rarity: 'common',
    subicon: '🪵',
    type: 'melee',
    w: 2,
    weight: 1000,
  },
});
