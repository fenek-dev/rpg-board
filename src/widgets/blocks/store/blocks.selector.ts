import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { MONEY } from '~/entities/items/money';

import { findItemsInsideContainer } from './blocks.utils';

export const selectBlocksBelongTo = (block_id: string) =>
  createSelector(
    (state: RootState) => state.blocks.blocks,
    (blocks) => {
      return Object.fromEntries(Object.entries(blocks).filter(([, b]) => b.belong === block_id));
    }
  );

export const selectBlocksByBelong = (id: string) =>
  createSelector(
    (state: RootState) => state.blocks.blocks,
    (blocks) => {
      return Object.fromEntries(Object.entries(blocks).filter(([, b]) => b.belong === id));
    }
  );

export const selectMoneyAmountInInventory = createSelector(
  (state: RootState) => state.blocks.blocks,
  (blocks) => {
    const coins = findItemsInsideContainer(blocks, MONEY.SilverCoin.id, BASIC_POPUPS.Inventory.container_id);
    const coins_amount = Object.values(coins).reduce((p, c) => p + c.amount, 0);
    return coins_amount;
  }
);
