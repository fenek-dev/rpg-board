import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';

import { countCostInContainer } from './blocks.utils';

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

export const selectCostInContainer = (id: string, isContainer?: boolean) =>
  createSelector(
    (state: RootState) => state.blocks.blocks,
    (blocks) => {
      if (!isContainer) return 0;
      return countCostInContainer(blocks, id);
    }
  );
