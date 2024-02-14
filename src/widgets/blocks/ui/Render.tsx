import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import { BlockTypes } from '~/entities/items/enum';
import { SerializedBlocks } from '~/widgets/blocks/store';

interface RenderProps {
  blocks: SerializedBlocks;
}

export const Render = ({ blocks }: RenderProps) => {
  return Object.entries(blocks).map(([id, block]) => {
    if (block.type === BlockTypes.UI) {
      const Element = UI_BLOCKS[block.name as keyof UiBlockType];
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
    // if (block.type === BlockTypes.Container) {
    //   const Element = CONTAINER_BLOCKS[block.name as keyof ContainerBlockType];
    //   return (
    //     <Element
    //       gridSize={gridSize}
    //       height={block.height}
    //       id={id}
    //       key={id}
    //       width={block.width}
    //       x={block.x}
    //       y={block.y}
    //     />
    //   );
    // }
    return null;
  });
};

Render.displayName = 'Render';
