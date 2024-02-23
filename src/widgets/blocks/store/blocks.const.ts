import BASIC_POPUPS from '~/entities/constant/popup';
import { ITEMS } from '~/entities/items';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  [ITEMS.CONSUMABLES.FOOD.Loaf.id]: {
    ...ITEMS.CONSUMABLES.FOOD.Loaf,
    amount: 2,
    belong: BASIC_POPUPS.Inventory.name,
    x: 2,
    y: 0,
  },
  [ITEMS.CONSUMABLES.POTIONS.HealPotion.id]: {
    ...ITEMS.CONSUMABLES.POTIONS.HealPotion,
    amount: 5,
    belong: BASIC_POPUPS.Inventory.name,
    x: 0,
    y: 1,
  },
  [ITEMS.CONSUMABLES.POTIONS.ManaPotion.id]: {
    ...ITEMS.CONSUMABLES.POTIONS.ManaPotion,
    amount: 3,
    belong: BASIC_POPUPS.Inventory.name,
    x: 1,
    y: 1,
  },
  [ITEMS.CONTAINERS.Foodbag.id]: {
    ...ITEMS.CONTAINERS.Foodbag,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 4,
    y: 0,
  },
  [ITEMS.GEAR.MELEE.WoodenSword.id]: {
    ...ITEMS.GEAR.MELEE.WoodenSword,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 5,
    y: 5,
  },
  heal2: {
    ...ITEMS.CONSUMABLES.POTIONS.HealPotion,
    amount: 2,
    belong: BASIC_POPUPS.Shop.name,
    x: 0,
    y: 1,
  },
};
