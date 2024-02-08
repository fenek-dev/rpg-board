import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getPathFromComposedId } from '~/shared/utils';

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
      const path = getPathFromComposedId(id);

      _.set(state.blocks, path, payload);
    },
    changeBlockPosition: (state, action: PayloadAction<{ id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;
      const path = getPathFromComposedId(id);
      const block = _.get(state.blocks, path);
      _.set(state.blocks, path, {
        ...block,
        x: block.x + payload.x,
        y: block.y + payload.y,
      });
    },
    removeBlock: (state, action: PayloadAction<string>) => {
      const path = getPathFromComposedId(action.payload);

      _.unset(state.blocks, path);
    },
  },
});

export const { addBlock, changeBlockPosition, removeBlock } = blocksSlice.actions;

export default blocksSlice.reducer;
