import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import { composeIds } from '~/shared/utils';
import { BlockTypes, SerializedBlocks } from '~/widgets/blocks/store';

interface RenderProps {
  blocks: SerializedBlocks;
  parentId?: string;
}

export const Render = ({ blocks, parentId }: RenderProps) => {
  return Object.entries(blocks).map(([i, block]) => {
    if (block.type === BlockTypes.UI) {
      const Element = UI_BLOCKS[block.name as keyof UiBlockType];
      return <Element data-grid={block} id={composeIds(parentId, i)} key={i} />;
    }
    // if (block.type === BlockTypes.Container) {
    //   const Element = CONTAINER_BLOCKS[block.name as keyof ContainerBlockType];
    //   return (
    //     <Element
    //       gridSize={gridSize}
    //       height={block.height}
    //       id={composeIds(parentId, id)}
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
