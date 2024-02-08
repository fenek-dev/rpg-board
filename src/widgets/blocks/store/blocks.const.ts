import { BlockTypes, SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  HpBar: {
    height: 1,
    name: 'HpBar',
    type: BlockTypes.UI,
    width: 6,
    x: 1,
    y: 1,
  },
  HungerBar: {
    height: 1,
    name: 'HungerBar',
    type: BlockTypes.UI,
    width: 5,
    x: 7,
    y: 1,
  },
  StaminaBar: {
    height: 1,
    name: 'StaminaBar',
    type: BlockTypes.UI,
    width: 6,
    x: 1,
    y: 2,
  },
  ThirstyBar: {
    height: 1,
    name: 'ThirstyBar',
    type: BlockTypes.UI,
    width: 5,
    x: 7,
    y: 2,
  },
};
