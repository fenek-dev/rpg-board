import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import { BlockTypes, SerializedBlocks } from '~/widgets/blocks/store';

interface RenderProps {
  blocks: SerializedBlocks;
}

export const Render = ({ blocks }: RenderProps) => {
  return Object.entries(blocks).map(([id, block]) => {
    if (block.type === BlockTypes.UI) {
      const Element = UI_BLOCKS[block.name as keyof UiBlockType];
      return <Element data-grid={block} id={id} key={id} />;
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
