import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Item } from '~/entities/extendable/items';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { useGridItem } from '~/widgets/grid/hooks/useGridItem';

import { Block, putBlocksTogether } from '../../store';
import { Details } from '../common/Details';

export const BasicItem = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const dispatch = useDispatch();
    const item = useSelector((state: RootState) => state.blocks.blocks[props.id!]) as Block<Item>;
    const { onDragEnd, onDragStart, style } = useGridItem(item, props.id!);

    const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
      const block = JSON.parse(e.dataTransfer.getData('block')) as Block;
      const block_id = e.dataTransfer.getData('id');
      if (block.id === item.id && block_id !== props.id && item.stackable) {
        dispatch(putBlocksTogether({ from: block_id, to: props.id! }));
      }
      e.preventDefault();
      e.stopPropagation();
    };

    const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
      e.dataTransfer.dropEffect = 'move';
      if (window.dragId !== props.id && window.dragging?.id === item.id && item.stackable) {
        e.dataTransfer.dropEffect = 'copy';
      }
      e.preventDefault();
      e.stopPropagation();
    };

    return (
      <Details block={item}>
        <Button
          className="text-3xl"
          draggable={true}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDragStart={onDragStart}
          onDrop={onDrop}
          rarity={item.rarity}
          ref={ref}
          style={style}
          unselectable="on"
          variant="outline"
          {...props}
        >
          {item.icon}
          <span className="absolute bottom-1 right-1 text-xs leading-none">
            {item.amount > 1 ? item.amount : undefined}
          </span>
        </Button>
      </Details>
    );
  })
);

BasicItem.displayName = 'BasicItem';
