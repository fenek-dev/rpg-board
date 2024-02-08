import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { BASIC_UI_BLOCKS } from './blocks.const';
import { Block, SerializedBlocks } from './blocks.types';

export interface BlocksState {
  blocks: SerializedBlocks;
}

const initialState: BlocksState = {
  blocks: BASIC_UI_BLOCKS,
};

export const blocksSlice = createSlice({
  initialState,
  name: 'blocks',
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      const id = crypto.randomUUID();
      state.blocks[id] = action.payload;
    },
    changeBlockPosition: (
      state,
      action: PayloadAction<{ id: number | string; x: number; y: number }>,
    ) => {
      state.blocks[action.payload.id].x += action.payload.x;
      state.blocks[action.payload.id].y += action.payload.y;
    },
  },
});

export const { changeBlockPosition } = blocksSlice.actions;

export default blocksSlice.reducer;
