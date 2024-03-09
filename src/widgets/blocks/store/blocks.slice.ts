import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep, get, set, unset } from 'lodash-es';
import { toast } from 'sonner';

import { loadState, resetState } from '~/app/store/actions';
import { Container } from '~/entities/extendable/containers';
import { Popup } from '~/entities/extendable/popups';

import { checkIntersect, findFreePlace } from '../utils/position';
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
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.blocks;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'blocks',
  reducers: {
    addBlock: (state, action: PayloadAction<Block & { block_id: string }>) => {
      const { block_id, ...payload } = action.payload;
      set(state.blocks, block_id, payload);
    },
    changeBlockPosition: (state, action: PayloadAction<{ belong: string; id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;

      const block = get(state.blocks, id);
      const to = get(state.blocks, payload.belong);

      if (!block || isNotContainerIntoContainer(block, to) || isAcceptableForThisContainer(to, block)) return;

      if (
        !checkIntersect(
          Object.fromEntries(Object.entries(state.blocks).filter(([, b]) => b.belong === payload.belong)),
          { ...block, belong: payload.belong, x: payload.x, y: payload.y },
          id
        )
      ) {
        block.x = payload.x;
        block.y = payload.y;
        block.belong = payload.belong;
        set(state.blocks, id, block);
      }
    },
    effectBlock: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const block = get(state.blocks, id);

      block.amount -= 1;

      if (block.amount <= 0) {
        unset(state.blocks, id);
      } else {
        set(state.blocks, id, block);
      }
    },
    equipBlock: (state, action: PayloadAction<string>) => {
      const block = get(state.blocks, action.payload);

      block.equipped = true;
      set(state.blocks, action.payload, block);
    },
    fitBlocksIntoContainer: (
      state,
      action: PayloadAction<{ blocks: Block[]; container_id: string; sizes: { h: number; w: number } }>
    ) => {
      const { blocks, container_id, sizes } = action.payload;

      blocks.forEach((block) => {
        const containerBlocks = Object.values(state.blocks).filter((block) => block.belong === container_id);
        const position = findFreePlace(containerBlocks, sizes, block);

        if (position.length === 0) return;

        block.x = position[0];
        block.y = position[1];
        block.belong = container_id;

        set(state.blocks, block.id, block);
      });
    },
    putBlockInsideContainer: (
      state,
      action: PayloadAction<{ block_id: string; container: Block<Container>; container_id: string }>
    ) => {
      const { block_id, container, container_id } = action.payload;

      const containerBlocks = Object.values(state.blocks).filter((block) => block.belong === container_id);
      const block = get(state.blocks, block_id);

      const position = findFreePlace(containerBlocks, container.popup, block);

      if (position.length === 0) return;

      block.x = position[0];
      block.y = position[1];
      block.belong = container_id;

      set(state.blocks, block_id, block);
    },
    putBlocksIntoOne: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const block = get(state.blocks, id);

      const blocks = Object.entries(state.blocks).filter(
        ([key, b]) => b.belong === block.belong && b.id === block.id && id !== key
      );

      const amount = blocks.reduce((prev, [key, curr]) => {
        unset(state.blocks, key);
        return curr.amount + prev;
      }, 0);

      block.amount += amount;

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
      const block = get(state.blocks, action.payload);
      unset(state.blocks, action.payload);
      toast.success(`You removed ${block.name}`, {
        description: `Amount: ${block.amount}`,
        icon: '🗑️',
      });
    },
    splitBlock: (state, action: PayloadAction<{ amount: number; id: string; popup: Popup }>) => {
      const { amount, id, popup } = action.payload;
      const block = get(state.blocks, id);

      const containerBlocks = Object.values(state.blocks).filter((b) => b.belong === block.belong);

      const position = findFreePlace(containerBlocks, popup, block);

      if (position.length === 0) return;

      block.amount -= amount;
      const new_block = cloneDeep(block);

      new_block.amount = amount;
      new_block.x = position[0];
      new_block.y = position[1];

      set(state.blocks, id, block);
      set(state.blocks, crypto.randomUUID(), new_block);
    },
    unequipBlock: (state, action: PayloadAction<string>) => {
      const block = get(state.blocks, action.payload);

      if (block) {
        block.equipped = false;
        set(state.blocks, action.payload, block);
      }
    },
  },
});

export const {
  addBlock,
  changeBlockPosition,
  effectBlock,
  equipBlock,
  fitBlocksIntoContainer,
  putBlockInsideContainer,
  putBlocksIntoOne,
  putBlocksTogether,
  removeBlock,
  splitBlock,
  unequipBlock,
} = blocksSlice.actions;

export default blocksSlice.reducer;
