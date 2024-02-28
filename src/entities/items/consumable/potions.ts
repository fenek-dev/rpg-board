import { asItems } from '~/entities/extendable/items';

import { EFFECTS } from '../effects';

export const POTIONS = asItems({
  HealPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Some kind of flask with red fluid inside',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 10,
      },
    ],
    h: 2,
    icon: '🫙',
    id: 'HealPotion',
    name: 'Healing potion',
    rarity: 'rare',
    stackable: true,
    subicon: '❤️',
    type: 'item',
    w: 1,
  },
  ManaPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Some kind of flask with blue fluid inside',
    effects: [
      {
        ...EFFECTS.RestoreEnergy,
        amount: 10,
      },
    ],
    h: 2,
    icon: '🫙',
    id: 'ManaPotion',
    name: 'Mana potion',
    rarity: 'rare',
    stackable: true,
    subicon: '🔹',
    type: 'item',
    w: 1,
  },
});
