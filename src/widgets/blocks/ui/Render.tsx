import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import CONTAINER_BLOCKS, { ContainerBlockType } from '~/app/packs/ui/containers.pack';
import { SerializedBlocks } from '~/widgets/blocks/store';

interface RenderProps {
  blocks: SerializedBlocks;
}

export const Render = ({ blocks }: RenderProps) => {
  return Object.entries(blocks).map(([id, block]) => {
    if (Object.keys(UI_BLOCKS).includes(block.type)) {
      const Element = UI_BLOCKS[block.type as keyof UiBlockType];
      return (
        <Element
          data-grid={block}
          draggable={true}
          id={id}
          key={id}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('opacity-60');
            window.dragging = null;
          }}
          // TODO: replace with function
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
    if (Object.keys(CONTAINER_BLOCKS).includes(block.type)) {
      const Element = CONTAINER_BLOCKS[block.type as keyof ContainerBlockType];
      return (
        <Element
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
          popup={{
            block_id: id,
            h: block.popup!.h,
            name: block.name,
            w: block.popup!.w,
            x: 0,
            y: 0,
          }}
          unselectable="on"
        />
      );
    }
    return null;
  });
};

Render.displayName = 'Render';
