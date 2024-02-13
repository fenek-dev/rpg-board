import UI_BLOCKS from '~/app/packs/ui/blocks.pack';
// import CONTAINER_BLOCKS from '~/app/packs/ui/containers.pack';

import { BlockTypes } from '~/entities/items/enum';
import { BasicPopups } from '~/entities/popups/enum';

import { SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  // Container: {
  //   contain: {
  //     HpBar1: {
  //       h: 1,
  //       name: UI_BLOCKS.HpBar.displayName!,
  //       type: BlockTypes.UI,
  //       w: 6,
  //       x: 1,
  //       y: 1,
  //     },
  //   },
  //   h: 2,
  //   name: CONTAINER_BLOCKS.DraggableContainer.displayName!,
  //   type: BlockTypes.Container,
  //   w: 2,
  //   x: 10,
  //   y: 10,
  // },
  HpBar: {
    belong: BasicPopups.Inventory,
    h: 1,
    name: UI_BLOCKS.HpBar.displayName!,
    type: BlockTypes.UI,
    w: 6,
    x: 0,
    y: 0,
  },
  HungerBar: {
    belong: BasicPopups.Inventory,
    h: 1,
    name: UI_BLOCKS.HungerBar.displayName!,
    type: BlockTypes.UI,
    w: 5,
    x: 6,
    y: 0,
  },
  StaminaBar: {
    belong: BasicPopups.Inventory,
    h: 1,
    name: UI_BLOCKS.StaminaBar.displayName!,
    type: BlockTypes.UI,
    w: 6,
    x: 0,
    y: 1,
  },
  ThirstyBar: {
    belong: BasicPopups.Inventory,
    h: 1,
    name: UI_BLOCKS.ThirstyBar.displayName!,
    type: BlockTypes.UI,
    w: 5,
    x: 6,
    y: 1,
  },
};
