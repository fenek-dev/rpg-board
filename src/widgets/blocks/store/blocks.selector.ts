import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';

export const selectBlocksBelongTo = (block_id: string) =>
  createSelector(
    (state: RootState) => state.blocks.blocks,
    (blocks) => {
      return Object.fromEntries(Object.entries(blocks).filter(([, b]) => b.belong === block_id));
    }
  );
