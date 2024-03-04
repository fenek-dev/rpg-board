import { range } from 'lodash-es';

import { PopupSizes } from '~/entities/extendable/popups';

import { Block, SerializedBlocks } from '../store';

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

export const checkIntersect = (blocks: SerializedBlocks, newBlock: Block, block_id: string): boolean => {
  return Object.entries(blocks).some(
    ([id, block]) =>
      id !== block_id &&
      newBlock.belong === block.belong &&
      newBlock.x < block.x + block.w &&
      newBlock.x + newBlock.w > block.x &&
      newBlock.y < block.y + block.h &&
      newBlock.y + newBlock.h > block.y
  );
};

// export const fitBlocks = (blocksInside: Block[], popup: PopupSizes, newBlocks: Block[]) => {
//   let position: number[] = [];

//   const array: boolean[][] = new Array(popup.h).fill(false).map(() => new Array(popup.w).fill(false));

//   blocksInside.forEach((blk) => {
//     range(blk.y, blk.h + blk.y).forEach((y) => range(blk.x, blk.w + blk.x).forEach((x) => (array[y][x] = true)));
//   });

//   const blocks: Block[] = []

//   array.forEach((row, y) => {
//     if (position.length !== 0) return true;
//     row.forEach((cell, x) => {
//       if (!cell) {
//         if (
//           range(y, block.h + y).every((cy) =>
//             range(x, block.w + x).every((cx) => cy < popup.h && cx < popup.w && !array?.[cy]?.[cx])
//           )
//         ) {
//           position = [x, y];
//           return true;
//         }
//       }
//       return false;
//     });
//   });

//   return position;
// };
