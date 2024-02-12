import { useDroppable } from '@dnd-kit/core';
import _ from 'lodash';
import React from 'react';

import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import CONTAINER_BLOCKS, { ContainerBlockType } from '~/app/packs/ui/containers.pack';
import { composeIds } from '~/shared/utils';
import { BlockTypes, SerializedBlocks } from '~/widgets/blocks/store';

interface RenderProps {
  blocks: SerializedBlocks;
  gridSize: number;
  parentId?: string;
}

export const Render = React.memo(({ blocks, gridSize, parentId }: RenderProps) => {
  const { setNodeRef } = useDroppable({
    id: parentId || crypto.randomUUID(),
  });

  return (
    <div className="h-full w-full" ref={setNodeRef}>
      {_.entries(blocks).map(([id, block]) => {
        if (block.type === BlockTypes.UI) {
          const Element = UI_BLOCKS[block.name as keyof UiBlockType];
          return (
            <Element
              gridSize={gridSize}
              height={block.height}
              id={composeIds(parentId, id)}
              key={id}
              width={block.width}
              x={block.x}
              y={block.y}
            />
          );
        }
        if (block.type === BlockTypes.Container) {
          const Element = CONTAINER_BLOCKS[block.name as keyof ContainerBlockType];
          return (
            <Element
              gridSize={gridSize}
              height={block.height}
              id={composeIds(parentId, id)}
              key={id}
              width={block.width}
              x={block.x}
              y={block.y}
            />
          );
        }
        return null;
      })}
    </div>
  );
});

Render.displayName = 'Render';
