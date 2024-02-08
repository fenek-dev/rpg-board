import { useDraggable, useDroppable } from '@dnd-kit/core';
import React from 'react';
import { useMemo } from 'react';

import { Button } from '~/shared/components/ui/button';

export interface DraggableItemProps
  extends Omit<React.ComponentProps<'button'>, 'ref'> {
  gridSize: number;
  height: number;
  width: number;
  x?: number;
  y?: number;
}

export const DraggableItem = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<DraggableItemProps>
>(({ children, gridSize, height, width, x, y, ...props }, ref) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    data: {
      type: 'item',
    },
    id: props.id || crypto.randomUUID(),
  });

  const { setNodeRef: nodeRef } = useDroppable({
    data: {
      type: 'item',
    },
    id: props.id || crypto.randomUUID(),
  });

  const [w, h] = useMemo(
    () => [gridSize * width - 2, gridSize * height - 2],
    [gridSize, height, width],
  );

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Button
      variant="outline"
      {...listeners}
      {...attributes}
      style={{
        ...style,
        height: h,
        left: x,
        position: 'absolute',
        top: y,
        width: w,
      }}
      {...props}
      ref={(el) => {
        setNodeRef(el);
        nodeRef(el);
        if (ref) {
          if (typeof ref === 'function') {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      }}
    >
      {children}
    </Button>
  );
});

DraggableItem.displayName = 'DraggableItem';
