import CONTAINER_ITEMS from '~/app/packs/items/container';
import UI_ITEMS from '~/app/packs/items/ui';
import { BasicPopups } from '~/entities/popups/enum';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  HpBar: {
    ...UI_ITEMS.HpBar,
    belong: BasicPopups.Inventory,
    x: 0,
    y: 0,
  },
  HungerBar: {
    ...UI_ITEMS.HungerBar,
    belong: BasicPopups.Inventory,
    x: 6,
    y: 0,
  },
  Moneybag: {
    ...CONTAINER_ITEMS.Moneybag,
    belong: BasicPopups.Inventory,
    x: 10,
    y: 10,
  },
  StaminaBar: {
    ...UI_ITEMS.StaminaBar,
    belong: BasicPopups.Inventory,
    x: 0,
    y: 1,
  },
  ThirstyBar: {
    ...UI_ITEMS.ThirstyBar,
    belong: BasicPopups.Inventory,
    x: 6,
    y: 1,
  },
};
