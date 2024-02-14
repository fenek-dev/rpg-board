import CONTAINER_ITEMS from '~/app/packs/items/container';
import BASIC_POPUPS from '~/app/packs/items/popup';
import UI_ITEMS from '~/app/packs/items/ui';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  HpBar: {
    ...UI_ITEMS.HpBar,
    belong: BASIC_POPUPS.Inventory.block_id,
    x: 0,
    y: 0,
  },
  HungerBar: {
    ...UI_ITEMS.HungerBar,
    belong: BASIC_POPUPS.Inventory.block_id,
    x: 6,
    y: 0,
  },
  Moneybag: {
    ...CONTAINER_ITEMS.Moneybag,
    belong: BASIC_POPUPS.Inventory.block_id,
    x: 10,
    y: 10,
  },
  StaminaBar: {
    ...UI_ITEMS.StaminaBar,
    belong: BASIC_POPUPS.Inventory.block_id,
    x: 0,
    y: 1,
  },
  ThirstyBar: {
    ...UI_ITEMS.ThirstyBar,
    belong: BASIC_POPUPS.Inventory.block_id,
    x: 6,
    y: 1,
  },
};
