import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { useGridItem } from '~/widgets/grid/hooks/useGridItem';

import { Block } from '../../store';

interface BasicItemProps extends ButtonProps {
  // putTogether: (from: string, to: string) => void;
}

export const BasicItem = React.memo(
  React.forwardRef<HTMLButtonElement, BasicItemProps>((props, ref) => {
    const item = useSelector((state: RootState) => state.blocks.blocks[props.id!]);
    const { onDragEnd, onDragStart, style } = useGridItem(item, props.id!);
    console.log(style, item);

    const onDrop = () => {
      if (window.dragging?.id === item.id && window.dragging.block_id !== props.id) {
        // putTogether(window.dragging.block_id, props.id!);
      }
    };

    return (
      <Button
        // onDragOver={(e) => {
        //   // TODO: awful
        //   if (window.dragging?.block_id !== props.id && window.dragging?.id === item.id) {
        //     e.dataTransfer.dropEffect = 'copy';
        //     window.dragover = true;
        //   }
        draggable={true}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        // }}
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
    );
  })
);

BasicItem.displayName = 'BasicItem';
