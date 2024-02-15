import BASIC_POPUPS from '~/entities/constant/popup';
import { FOOD, POTIONS } from '~/entities/items/consumbale';
import CONTAINER_ITEMS from '~/entities/items/containers';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  [CONTAINER_ITEMS.Foodbag.id]: {
    ...CONTAINER_ITEMS.Foodbag,
    belong: BASIC_POPUPS.Inventory.name,
    x: 4,
    y: 0,
  },
  [CONTAINER_ITEMS.Moneybag.id]: {
    ...CONTAINER_ITEMS.Moneybag,
    belong: BASIC_POPUPS.Inventory.name,
    x: 0,
    y: 0,
  },
  [FOOD.Loaf.id]: {
    ...FOOD.Loaf,
    belong: BASIC_POPUPS.Inventory.name,
    x: 2,
    y: 0,
  },
  [POTIONS.HealPotion.id]: {
    ...POTIONS.HealPotion,
    belong: BASIC_POPUPS.Inventory.name,
    x: 2,
    y: 1,
  },
  hello: {
    ...POTIONS.HealPotion,
    belong: BASIC_POPUPS.Inventory.name,
    x: 3,
    y: 1,
  },
};
