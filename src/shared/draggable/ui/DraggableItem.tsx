import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import React from 'react';

import { Button } from '~/shared/components/ui/button';
import { useCombinedRefs } from '~/shared/hooks/useCombinedRefs';
import { useDraggableStyles } from '~/shared/hooks/useDraggableStyles';

import { useDraggableItem } from '../hooks/useDraggableItem';

export interface DraggableItemProps extends Omit<React.ComponentProps<'button'>, 'ref' | 'style'> {
  gridSize: number;
  height: number;
  id: string;
  width: number;
  x: number;
  y: number;
}

export const DraggableItem = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<DraggableItemProps>>(
  ({ children, gridSize, height, width, x, y, ...props }, ref) => {
    const { attributes, listeners, nodeRef, setNodeRef, transform } = useDraggableItem(props.id);
    const refs = useCombinedRefs([ref, setNodeRef, nodeRef]);

    const style = useDraggableStyles(gridSize, width, height, x, y, transform);

    return (
      <Btn attributes={attributes} {...props} listeners={listeners} ref={refs} style={style}>
        {children}
      </Btn>
    );
  }
);

DraggableItem.displayName = 'DraggableItem';

// Memo component to prevent unnecessary renders
interface BtnProps extends Omit<React.ComponentProps<'button'>, 'ref'> {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}

const Btn = React.memo(
  React.forwardRef<HTMLButtonElement, BtnProps>((props, ref) => (
    <Button variant="outline" {...props} {...props.listeners} ref={ref}></Button>
  ))
);
