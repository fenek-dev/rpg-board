import { asBlocks } from '~/shared/utils/item';

import UI_BLOCKS from '../ui/blocks.pack';

export const UI_ITEMS = asBlocks({
  HpBar: {
    h: 1,
    name: UI_BLOCKS.HpBar.displayName!,
    type: UI_BLOCKS.HpBar.displayName!,
    w: 6,
  },
  HungerBar: {
    h: 1,
    name: UI_BLOCKS.HungerBar.displayName!,
    type: UI_BLOCKS.HungerBar.displayName!,
    w: 5,
  },
  StaminaBar: {
    h: 1,
    name: UI_BLOCKS.StaminaBar.displayName!,
    type: UI_BLOCKS.StaminaBar.displayName!,
    w: 6,
  },
  ThirstyBar: {
    h: 1,
    name: UI_BLOCKS.ThirstyBar.displayName!,
    type: UI_BLOCKS.ThirstyBar.displayName!,
    w: 5,
  },
});

export default UI_ITEMS;
