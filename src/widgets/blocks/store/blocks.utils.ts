import { get } from 'lodash-es';

import { Block, SerializedBlocks } from '.';

export const isAcceptableForThisContainer = (container: Block, item: Block) =>
  container && 'accept' in container && (container.accept === 'all' || container.accept !== item.category);

export const isNotContainerIntoContainer = (container: Block, item: Block) =>
  container && item && container.type === 'container' && item.type === 'container';

export const findItemsInsideContainer = (
  blocks: SerializedBlocks,
  id: string,
  container_id: string
): SerializedBlocks => {
  return Object.fromEntries(
    Object.entries(blocks)
      .filter(([, block]) => block.id === id)
      .filter(([, block]) => {
        if (block.belong === container_id) {
          return true;
        } else {
          const container = get(blocks, block.belong);
          console.log(block.belong);

          return container?.belong === container_id;
        }
      })
  );
};
