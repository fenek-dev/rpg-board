import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep, get, set, unset } from 'lodash-es';

import { Container } from '~/entities/extendable/containers';
import { Popup } from '~/entities/extendable/popups';

import { findFreePlace } from '../utils/position';
import { BASIC_UI_BLOCKS } from './blocks.const';
import { Block, SerializedBlocks } from './blocks.types';
import { isAcceptableForThisContainer, isNotContainerIntoContainer } from './blocks.utils';

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

      if (!block || isNotContainerIntoContainer(block, to) || isAcceptableForThisContainer(to, block)) return;

      block.x = payload.x;
      block.y = payload.y;
      block.belong = payload.belong;

      set(state.blocks, id, block);
    },
    putBlockInsideContainer: (
      state,
      action: PayloadAction<{ block_id: string; container: Container; container_id: string }>
    ) => {
      const { block_id, container, container_id } = action.payload;

      const containerBlocks = Object.values(state.blocks).filter((block) => block.belong === container_id);

      const position = findFreePlace(containerBlocks, container.popup);

      if (position.length === 0) return;

      const block = get(state.blocks, block_id);

      block.x = position[0];
      block.y = position[1];
      block.belong = container_id;

      set(state.blocks, block_id, block);
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
    splitBlock: (state, action: PayloadAction<{ amount: number; id: string; popup: Popup }>) => {
      const { amount, id, popup } = action.payload;
      const block = get(state.blocks, id);

      const containerBlocks = Object.values(state.blocks).filter((b) => b.belong === block.belong);

      const position = findFreePlace(containerBlocks, popup);

      if (position.length === 0) return;

      block.amount -= amount;
      const new_block = cloneDeep(block);

      new_block.amount = amount;
      new_block.x = position[0];
      new_block.y = position[1];

      set(state.blocks, id, block);
      set(state.blocks, crypto.randomUUID(), new_block);
    },
  },
});

export const { addBlock, changeBlockPosition, putBlockInsideContainer, putBlocksTogether, removeBlock, splitBlock } =
  blocksSlice.actions;

export default blocksSlice.reducer;
