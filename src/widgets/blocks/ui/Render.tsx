import { SerializedBlocks } from '~/widgets/blocks/store';

import { BasicContainer } from './containers/BasicContainer';
import { BasicItem } from './items/BasicItem';

interface RenderProps {
  blocks: SerializedBlocks;
}

export const Render = ({ blocks }: RenderProps) => {
  return Object.entries(blocks).map(([id, block]) => {
    if (block.type === 'container') {
      return (
        <BasicContainer
          container={block}
          data-grid={block}
          draggable={true}
          id={id}
          key={id}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('opacity-60');
            window.dragging = null;
          }}
          onDragStart={(e) => {
            window.dragging = { ...block, id };
            e.currentTarget.classList.add('opacity-60');
            e.dataTransfer.setData('text/plain', '');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget, 0, -1);
          }}
          unselectable="on"
        />
      );
    }
    if (block.type === 'item') {
      return (
        <BasicItem
          data-grid={block}
          draggable={true}
          id={id}
          item={block}
          key={id}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('opacity-60');
            window.dragging = null;
          }}
          onDragStart={(e) => {
            window.dragging = { ...block, id };
            e.currentTarget.classList.add('opacity-60');
            e.dataTransfer.setData('text/plain', '');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget, 0, -1);
          }}
          unselectable="on"
        />
      );
    }
    return null;
  });
};

Render.displayName = 'Render';
