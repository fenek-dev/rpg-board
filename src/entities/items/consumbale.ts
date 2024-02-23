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
    h: 2,
    icon: '🫙',
    id: 'HealPotion',
    name: 'Healing potion',
    rarity: 'rare',
    stackable: true,
    subicon: '❤️',
    type: 'item',
    w: 1,
    weight: 100,
  },
  ManaPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Some kind of flask with blue fluid inside',
    effects: [
      {
        ...EFFECTS.RestoreMana,
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
    weight: 100,
  },
});

export const CONSUMABLE_ITEMS = asItems(Object.assign({}, FOOD, POTIONS));
