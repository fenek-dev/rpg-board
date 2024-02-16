import { useCallback } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SerializedBlocks, putBlocksTogether, selectBlocksByBelong } from '~/widgets/blocks/store';

import { BasicContainer } from './containers/BasicContainer';
import { BasicItem } from './items/BasicItem';

interface RenderProps {
  container_id: string;
}

export const Render = React.memo(({ container_id }: RenderProps) => {
  const blocks = useSelector(selectBlocksByBelong(container_id));
  console.log(blocks);

  const dispatch = useDispatch();

  const putTogether = useCallback((from: string, to: string) => dispatch(putBlocksTogether({ from, to })), [dispatch]);

  // const onDragEnd: React.DragEventHandler<HTMLButtonElement> = useCallback((e) => {
  //   e.currentTarget.classList.remove('opacity-60');
  //   window.dragging = null;
  // }, []);

  const onDragStart: React.DragEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.currentTarget.classList.add('opacity-60');
    e.dataTransfer.setData('text/plain', '');
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setDragImage(e.currentTarget, 0, -1);
  }, []);

  return (
    <div>
      {Object.entries(blocks).map(([id, block]) => {
        // if (block.type === 'container') {
        //   return (
        //     <BasicContainer
        //       container={block}
        //       data-grid={block}
        //       draggable={true}
        //       id={id}
        //       key={id}
        //       onDragEnd={onDragEnd}
        //       onDragStart={(e) => {
        //         window.dragging = { ...block, block_id: id };
        //         onDragStart(e);
        //       }}
        //       unselectable="on"
        //     />
        //   );
        // }
        if (block.type === 'item') {
          return (
            <BasicItem
              id={id}
              key={id}
              // onDragEnd={onDragEnd}
              // putTogether={putTogether}
            />
          );
        }
        return null;
      })}
    </div>
  );
});

Render.displayName = 'Render';
