import { asItems } from '~/entities/extendable/items';

import { EFFECTS } from '../effects';

export const FOOD = asItems({
  Apple: {
    category: 'consumable',
    cost: 5,
    description: 'Red apple',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 3,
      },
    ],
    h: 1,
    icon: '🍎',
    id: 'Apple',
    name: 'Apple',
    rarity: 'common',
    stackable: true,
    type: 'item',
    w: 1,
  },
  Berry: {
    category: 'consumable',
    cost: 2,
    description: 'Forest berry',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 1,
      },
    ],
    h: 1,
    icon: '🫐',
    id: 'Berry',
    name: 'Berry',
    rarity: 'common',
    stackable: true,
    type: 'item',
    w: 1,
  },
  Coconut: {
    category: 'consumable',
    cost: 10,
    description: 'Coconut',
    effects: [
      {
        ...EFFECTS.RestoreEnergy,
        amount: 4,
      },
    ],
    h: 2,
    icon: '🥥',
    id: 'Coconut',
    name: 'Coconut',
    rarity: 'rare',
    stackable: true,
    type: 'item',
    w: 2,
  },
  HeavenFruit: {
    category: 'consumable',
    cost: 200,
    description: 'Heaven fruit',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 50,
      },
    ],
    h: 2,
    icon: '🍇',
    id: 'HeavenFruit',
    name: 'Heaven Fruit',
    rarity: 'epic',
    stackable: true,
    subicon: '✨',
    type: 'item',
    w: 2,
  },
  Loaf: {
    category: 'consumable',
    cost: 10,
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
  },
  Oyster: {
    category: 'consumable',
    cost: 20,
    description: 'Oyster',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 6,
      },
    ],
    h: 1,
    icon: '🦪',
    id: 'Oyster',
    name: 'Oyster',
    rarity: 'rare',
    stackable: true,
    type: 'item',
    w: 2,
  },
  Peanut: {
    category: 'consumable',
    cost: 10,
    description: 'Peanut',
    effects: [
      {
        ...EFFECTS.Heal,
        amount: 2,
      },
    ],
    h: 1,
    icon: '🥜',
    id: 'Peanut',
    name: 'Peanut',
    rarity: 'common',
    stackable: true,
    type: 'item',
    w: 1,
  },
});
