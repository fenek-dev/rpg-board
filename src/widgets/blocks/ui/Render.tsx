import React from 'react';
import { useSelector } from 'react-redux';

import { selectBlocksByBelong } from '~/widgets/blocks/store';

import { ContainerItem } from './items/container/ContainerItem';
import { GearItem } from './items/gear/GearItem';
import { BasicItem } from './items/item/BasicItem';

interface RenderProps {
  container_id: string;
}

export const Render = React.memo(({ container_id }: RenderProps) => {
  const blocks = useSelector(selectBlocksByBelong(container_id));

  return (
    <div>
      {Object.entries(blocks).map(([id, block]) => {
        if (block.type === 'container') {
          return <ContainerItem id={id} key={id} />;
        }
        if (block.type === 'item') {
          return <BasicItem id={id} key={id} />;
        }
        if (block.category === 'gear') {
          return <GearItem id={id} key={id} />;
        }
        return null;
      })}
    </div>
  );
});

Render.displayName = 'Render';
