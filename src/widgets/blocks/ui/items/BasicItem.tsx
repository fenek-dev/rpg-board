import React from 'react';

import { Button, ButtonProps } from '~/shared/components/ui/button';

import { Block } from '../../store';

interface BasicItemProps extends ButtonProps {
  item: Block;
  putTogether: (from: string, to: string) => void;
}

export const BasicItem = React.memo(
  React.forwardRef<HTMLButtonElement, BasicItemProps>(({ putTogether, ...props }, ref) => {
    const onDrop = () => {
      if (window.dragging?.id === props.item.id && window.dragging.block_id !== props.id) {
        putTogether(window.dragging.block_id, props.id!);
      }
    };
    return (
      <Button onDrop={onDrop} rarity={props.item.rarity} variant="outline" {...props} ref={ref}>
        {props.item.icon}
        <span className="absolute bottom-1 right-1 text-xs">
          {props.item.amount > 1 ? props.item.amount : undefined}
        </span>
      </Button>
    );
  })
);

BasicItem.displayName = 'BasicItem';
