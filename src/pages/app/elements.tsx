import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import { UI_BLOCKS } from '~/app/enum/blocks';
import { RootState } from '~/app/store';

export const Elements = React.memo(() => {
  const blocks = useSelector((state: RootState) => state.blocks.blocks);
  return (
    <div className="h-full w-full">
      {_.entries(blocks).map(([id, { children, ...block }]) => {
        const Element = UI_BLOCKS[block.name];
        return <Element gridSize={30} id={id} key={id} {...block} />;
      })}
    </div>
  );
});

Elements.displayName = 'Elements';
