import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '~/shared/components/ui/button';
import { useCombinedRefs } from '~/shared/hooks/useCombinedRefs';
import { useDraggableStyles } from '~/shared/hooks/useDraggableStyles';
import { addPopup } from '~/widgets/popups/store/popups.slice';

import { useDraggableItem } from '../hooks/useDraggableItem';

export interface DraggableContainerProps extends Omit<React.ComponentProps<'button'>, 'ref' | 'style'> {
  gridSize: number;
  height: number;
  id: string;
  width: number;
  x: number;
  y: number;
}

export const DraggableContainer = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<DraggableContainerProps>>(
  ({ children, gridSize, height, width, x, y, ...props }, ref) => {
    const dispatch = useDispatch();
    const { attributes, listeners, nodeRef, setNodeRef, transform } = useDraggableItem(props.id);

    const refs = useCombinedRefs([ref, setNodeRef, nodeRef]);

    const openContainer = useCallback(() => {
      dispatch(
        addPopup({
          block_id: props.id,
          height: 10,
          id: crypto.randomUUID(),
          width: 10,
          x: 0,
          y: 0,
        })
      );
    }, [dispatch, props.id]);

    const style = useDraggableStyles(gridSize, width, height, x, y, transform);

    return (
      <>
        <Btn attributes={attributes} {...props} listeners={listeners} onClick={openContainer} ref={refs} style={style}>
          {children}
          hello
        </Btn>
      </>
    );
  }
);

DraggableContainer.displayName = 'DraggableContainer';

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
