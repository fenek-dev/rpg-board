import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import UI_BLOCKS, { UiBlockType } from '~/app/packs/ui/blocks.pack';
import { RootState } from '~/app/store';
import { BlockTypes } from '~/widgets/blocks/store';

export const Render = React.memo(() => {
  const blocks = useSelector((state: RootState) => state.blocks.blocks);
  return (
    <div className="h-full w-full">
      {_.entries(blocks).map(([id, { children, type, ...block }]) => {
        if (type === BlockTypes.UI) {
          const Element = UI_BLOCKS[block.name as keyof UiBlockType];
          return <Element gridSize={30} id={id} key={id} {...block} />;
        }
        return null;
      })}
    </div>
  );
});

Render.displayName = 'Render';
