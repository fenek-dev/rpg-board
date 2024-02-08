import UI_BLOCKS from '~/app/packs/ui/blocks.pack';
import CONTAINER_BLOCKS from '~/app/packs/ui/containers.pack';

import { BlockTypes, SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  Container: {
    contain: {
      HpBar1: {
        height: 1,
        name: UI_BLOCKS.HpBar.displayName!,
        type: BlockTypes.UI,
        width: 6,
        x: 1,
        y: 1,
      },
    },
    height: 2,
    name: CONTAINER_BLOCKS.DraggableContainer.displayName!,
    type: BlockTypes.Container,
    width: 2,
    x: 10,
    y: 10,
  },
  HpBar: {
    height: 1,
    name: UI_BLOCKS.HpBar.displayName!,
    type: BlockTypes.UI,
    width: 6,
    x: 1,
    y: 1,
  },
  HungerBar: {
    height: 1,
    name: UI_BLOCKS.HungerBar.displayName!,
    type: BlockTypes.UI,
    width: 5,
    x: 7,
    y: 1,
  },
  StaminaBar: {
    height: 1,
    name: UI_BLOCKS.StaminaBar.displayName!,
    type: BlockTypes.UI,
    width: 6,
    x: 1,
    y: 2,
  },
  ThirstyBar: {
    height: 1,
    name: UI_BLOCKS.ThirstyBar.displayName!,
    type: BlockTypes.UI,
    width: 5,
    x: 7,
    y: 2,
  },
};
