import BASIC_POPUPS from '~/entities/constant/popup';
import { ITEMS } from '~/entities/items';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  [ITEMS.Foodbag.id]: {
    ...ITEMS.Foodbag,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 4,
    y: 0,
  },
  [ITEMS.HealPotion.id]: {
    ...ITEMS.HealPotion,
    amount: 5,
    belong: BASIC_POPUPS.Inventory.name,
    x: 0,
    y: 1,
  },
  [ITEMS.Loaf.id]: {
    ...ITEMS.Loaf,
    amount: 2,
    belong: BASIC_POPUPS.Inventory.name,
    x: 2,
    y: 0,
  },
  [ITEMS.ManaPotion.id]: {
    ...ITEMS.ManaPotion,
    amount: 3,
    belong: BASIC_POPUPS.Inventory.name,
    x: 1,
    y: 1,
  },
  [ITEMS.WoodenSword.id]: {
    ...ITEMS.WoodenSword,
    amount: 1,
    belong: BASIC_POPUPS.Inventory.name,
    x: 5,
    y: 5,
  },
  heal2: {
    ...ITEMS.HealPotion,
    amount: 2,
    belong: BASIC_POPUPS.Shop.name,
    x: 0,
    y: 1,
  },
};
