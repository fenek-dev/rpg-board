import { asItems } from '~/entities/extendable/items';

import { DICES } from '../dices';
import { EFFECTS } from '../effects';

export const FOOD = asItems({
  Loaf: {
    category: 'consumable',
    cost: 5,
    description: 'Fresh loaf',
    effects: [
      {
        ...EFFECTS.Heal,
        dices: [DICES.d2, DICES.d2],
      },
    ],
    h: 1,
    icon: '🥖',
    id: 'Loaf',
    name: 'Loaf',
    rarity: 'common',
    stackable: true,
    type: 'item',
    w: 2,
    weight: 500,
  },
});
