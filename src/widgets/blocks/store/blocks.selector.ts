import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

import { RootState } from '~/app/store';

import { Block, SerializedBlocks } from './blocks.types';

export const selectNestedBlock = (block_id: string) =>
  createSelector(
    (state: RootState) => state.blocks.blocks,
    (blocks) => {
      const findBlockById = (blockId: string, blocks: SerializedBlocks): Block | undefined => {
        for (const [id, block] of _.entries(blocks)) {
          if (id === blockId) {
            return block;
          }
          if (block.contain) {
            const nestedBlock = findBlockById(blockId, block.contain);
            if (nestedBlock) {
              return nestedBlock;
            }
          }
        }
        return undefined;
      };

      return findBlockById(block_id, blocks);
    }
  );
