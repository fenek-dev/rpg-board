import { PopupSizes } from '~/entities/extendable/popups';

import { Block } from '../store';

export const findFreePlace = (blocks: Block[], popup: PopupSizes) => {
  let position: number[] = [];

  const array: boolean[][] = new Array(popup.h).fill(new Array(popup.w).fill(false));

  blocks.forEach((block) => {
    array[block.y][block.x] = true;
  });

  array.find((row, y) => {
    if (position.length !== 0) return true;
    return row.find((cell, x) => {
      if (!cell) {
        position = [x, y];
        return true;
      }
      return false;
    });
  });

  return position;
};
