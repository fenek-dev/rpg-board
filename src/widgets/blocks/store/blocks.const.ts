import BASIC_POPUPS from '~/entities/constant/popup';
import { FOOD, POTIONS } from '~/entities/items/consumbale';
import CONTAINER_ITEMS from '~/entities/items/containers';
import { GEAR_ITEMS } from '~/entities/items/gear';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  [CONTAINER_ITEMS.Foodbag.id]: {
    ...CONTAINER_ITEMS.Foodbag,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 4,
    y: 0,
  },
  [FOOD.Loaf.id]: {
    ...FOOD.Loaf,
    amount: 2,
    belong: BASIC_POPUPS.Inventory.name,
    x: 2,
    y: 0,
  },
  [GEAR_ITEMS.WoodenSword.id]: {
    ...GEAR_ITEMS.WoodenSword,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 5,
    y: 5,
  },
  [POTIONS.HealPotion.id]: {
    ...POTIONS.HealPotion,
    amount: 5,
    belong: BASIC_POPUPS.Inventory.name,
    x: 0,
    y: 1,
  },
  [POTIONS.ManaPotion.id]: {
    ...POTIONS.ManaPotion,
    amount: 3,
    belong: BASIC_POPUPS.Inventory.name,
    x: 1,
    y: 1,
  },
  heal2: {
    ...POTIONS.HealPotion,
    amount: 2,
    belong: BASIC_POPUPS.Shop.name,
    x: 0,
    y: 1,
  },
};
