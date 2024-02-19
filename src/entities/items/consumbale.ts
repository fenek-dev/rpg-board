import { asItems } from '../extendable/items';
import { EFFECTS } from './effects';

export const FOOD = asItems({
  Loaf: {
    category: 'consumable',
    cost: 5,
    description: 'Fresh loaf',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 5,
      },
    ],
    icon: '🥖',
    id: 'Loaf',
    name: 'Loaf',
    rarity: 'common',
    stackable: true,
    type: 'item',
    weight: 500,
  },
});

export const POTIONS = asItems({
  HealPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Some kind of flask with red fluid inside',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 25,
      },
    ],
    icon: '🫙',
    id: 'HealPotion',
    name: 'Healing potion',
    rarity: 'rare',
    stackable: true,
    subicon: '❤️',
    type: 'item',
    weight: 500,
  },
});

export const CONSUMABLE_ITEMS = asItems(Object.assign({}, FOOD, POTIONS));
