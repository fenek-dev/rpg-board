import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { get, set, unset } from 'lodash-es';

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
    addBlock: (state, action: PayloadAction<Block & { id: string }>) => {
      const { id, ...payload } = action.payload;
      set(state.blocks, id, payload);
    },
    changeBlockPosition: (state, action: PayloadAction<{ belong: string; id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;

      const block = get(state.blocks, id);
      const to = get(state.blocks, payload.belong);

      if (!block || (block.belong !== payload.belong && to.type === block.type)) return;

      block.x = payload.x;
      block.y = payload.y;
      block.belong = payload.belong;

      set(state.blocks, id, block);
    },
    putBlocksTogether: (state, action: PayloadAction<{ from: string; to: string }>) => {
      const from = get(state.blocks, action.payload.from);
      const to = get(state.blocks, action.payload.to);

      if (from.id === to.id) {
        to.amount += from.amount;
        set(state.blocks, action.payload.to, to);
        unset(state.blocks, action.payload.from);
      }
    },
    removeBlock: (state, action: PayloadAction<string>) => {
      unset(state.blocks, action.payload);
    },
  },
});

export const { addBlock, changeBlockPosition, putBlocksTogether, removeBlock } = blocksSlice.actions;

export default blocksSlice.reducer;
