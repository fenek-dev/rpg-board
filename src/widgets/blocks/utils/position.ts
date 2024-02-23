import { range } from 'lodash-es';

import { PopupSizes } from '~/entities/extendable/popups';

import { Block } from '../store';

export const findFreePlace = (blocks: Block[], popup: PopupSizes, block: Block) => {
  let position: number[] = [];

  const array: boolean[][] = new Array(popup.h).fill(false).map(() => new Array(popup.w).fill(false));

  blocks.forEach((blk) => {
    range(blk.y, blk.h + blk.y).forEach((y) => range(blk.x, blk.w + blk.x).forEach((x) => (array[y][x] = true)));
  });

  array.find((row, y) => {
    if (position.length !== 0) return true;
    return row.find((cell, x) => {
      if (!cell) {
        if (
          range(y, block.h + y).every((cy) =>
            range(x, block.w + x).every((cx) => cy < popup.h && cx < popup.w && !array?.[cy]?.[cx])
          )
        ) {
          position = [x, y];
          return true;
        }
      }
      return false;
    });
  });

  return position;
};
