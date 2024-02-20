import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep, get, set, unset } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { Container } from '~/entities/extendable/containers';
import { Popup } from '~/entities/extendable/popups';
import { MONEY } from '~/entities/items/money';

import { findFreePlace } from '../utils/position';
import { BASIC_UI_BLOCKS } from './blocks.const';
import { Block, SerializedBlocks } from './blocks.types';
import { findItemsInsideContainer, isAcceptableForThisContainer, isNotContainerIntoContainer } from './blocks.utils';

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
    addBlock: (state, action: PayloadAction<Block & { block_id: string }>) => {
      const { block_id, ...payload } = action.payload;
      set(state.blocks, block_id, payload);
    },
    buyItem: (state, action: PayloadAction<{ belong: string; id: string; x: number; y: number }>) => {
      const { id } = action.payload;
      const block = get(state.blocks, id);

      const coins = findItemsInsideContainer(state.blocks, MONEY.SilverCoin.id, BASIC_POPUPS.Inventory.container_id);

      const cost = block.amount * block.cost;
      const coins_amount = Object.values(coins).reduce((p, c) => p + c.amount, 0);
      if (coins_amount >= cost) {
        let left = cost;
        Object.entries(coins).forEach(([key, coin]) => {
          if (coin.amount >= left) {
            coin.amount -= left;
            left = 0;
            set(state.blocks, key, coin);
          } else {
            left -= coin.amount;
            unset(state.blocks, key);
          }
        });
        console.log(changeBlockPosition);

        blocksSlice.caseReducers.changeBlockPosition(state, action);
      } else {
        // TODO: Sonner
        console.log('Not enough money');
      }
    },
    changeBlockPosition: (state, action: PayloadAction<{ belong: string; id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;
      console.log('changeBlockPosition', id, payload);

      const block = get(state.blocks, id);
      const to = get(state.blocks, payload.belong);

      if (!block || isNotContainerIntoContainer(block, to) || isAcceptableForThisContainer(to, block)) return;

      block.x = payload.x;
      block.y = payload.y;
      block.belong = payload.belong;

      set(state.blocks, id, block);
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
      unset(state.blocks, action.payload);
    },
    sellItem: (state, action: PayloadAction<{ belong: string; id: string; x: number; y: number }>) => {
      const { id } = action.payload;
      const block = get(state.blocks, id);

      const coins = findItemsInsideContainer(state.blocks, MONEY.SilverCoin.id, BASIC_POPUPS.Inventory.container_id);

      const amount = block.amount * block.cost;
      if (Object.keys(coins).length === 0) {
        const containerBlocks = Object.values(state.blocks).filter(
          (b) => b.belong === BASIC_POPUPS.Inventory.container_id
        );
        const position = findFreePlace(containerBlocks, BASIC_POPUPS.Inventory);

        if (position.length === 0 || amount <= 0) return;

        set(state.blocks, crypto.randomUUID(), {
          ...MONEY.SilverCoin,
          amount,
          belong: BASIC_POPUPS.Inventory.container_id,
          x: position[0],
          y: position[1],
        });
      } else {
        const coinId = Object.keys(coins)[0];
        const coin = get(state.blocks, coinId);
        coin.amount += amount;
        set(state.blocks, coinId, coin);
      }
      blocksSlice.caseReducers.changeBlockPosition(state, action);
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

export const {
  addBlock,
  buyItem,
  changeBlockPosition,
  effectBlock,
  putBlockInsideContainer,
  putBlocksIntoOne,
  putBlocksTogether,
  removeBlock,
  sellItem,
  splitBlock,
} = blocksSlice.actions;

export default blocksSlice.reducer;
