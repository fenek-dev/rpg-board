import { asItems } from '../extendable/items';

export const FOOD = asItems({
  Loaf: {
    category: 'consumable',
    cost: 5,
    description: 'Fresh loaf',
    h: 1,
    icon: '🥖',
    id: 'Loaf',
    name: 'Loaf',
    rarity: 'common',
    type: 'item',
    w: 2,
    weight: 500,
  },
});

export const POTIONS = asItems({
  HealPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Healing potion',
    h: 2,
    icon: '🫙',
    id: 'HealPotion',
    name: 'Healing potion',
    rarity: 'common',
    type: 'item',
    w: 1,
    weight: 500,
  },
});

export const CONSUMABLE_ITEMS = asItems(Object.assign({}, FOOD, POTIONS));
