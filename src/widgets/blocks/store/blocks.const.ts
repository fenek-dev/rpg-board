import { BlockTypes, SerializedBlocks } from './blocks.types';

export const BASIC_UI_BLOCKS: SerializedBlocks = {
  HpBar: {
    height: 1,
    name: 'HpBar',
    type: BlockTypes.UI,
    width: 6,
    x: 30,
    y: 30,
  },
  HungerBar: {
    height: 1,
    name: 'HungerBar',
    type: BlockTypes.UI,
    width: 5,
    x: 210,
    y: 30,
  },
  StaminaBar: {
    height: 1,
    name: 'StaminaBar',
    type: BlockTypes.UI,
    width: 6,
    x: 30,
    y: 60,
  },
  ThirstyBar: {
    height: 1,
    name: 'ThirstyBar',
    type: BlockTypes.UI,
    width: 5,
    x: 210,
    y: 60,
  },
};
