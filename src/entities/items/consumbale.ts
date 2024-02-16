import { asItems } from '../extendable/items';

export const FOOD = asItems({
  Loaf: {
    category: 'consumable',
    cost: 5,
    description: 'Fresh loaf',
    icon: '🥖',
    id: 'Loaf',
    name: 'Loaf',
    rarity: 'epic',
    stackable: true,
    type: 'item',
    weight: 500,
  },
});

export const POTIONS = asItems({
  HealPotion: {
    category: 'consumable',
    cost: 10,
    description: 'Some kind of potions with red fluid inside',
    icon: '🫙',
    id: 'HealPotion',
    name: 'Healing potion',
    rarity: 'legendary',
    stackable: true,
    type: 'item',
    weight: 500,
  },
});

export const CONSUMABLE_ITEMS = asItems(Object.assign({}, FOOD, POTIONS));
