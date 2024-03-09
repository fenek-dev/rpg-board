import React, { useCallback } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardContent, CardHeader, CardTitle } from '~/shared/components/ui/card';

import { selectPopupById } from '../../store/popups.selector';
import { changePopupPosition } from '../../store/popups.slice';
import { PopupMenu } from './PopupMenu';

export interface DraggablePopupProps {
  id: string;
  onClose?: () => void;
}

export const SimpleDraggablePopup = React.memo(
  ({ children, id, onClose }: React.PropsWithChildren<DraggablePopupProps>) => {
    const nodeRef = React.useRef(null);
    const popup = useSelector(selectPopupById(id));
    const dispatch = useDispatch();

    const handleStop = useCallback<DraggableEventHandler>(
      (_e, { x, y }) => {
        dispatch(
          changePopupPosition({
            id,
            x,
            y,
          })
        );
      },
      [dispatch, id]
    );

    return (
      <Draggable nodeRef={nodeRef} onStop={handleStop} position={popup}>
        <Card className="fixed z-10 flex cursor-move select-none flex-col items-center" id={id} ref={nodeRef}>
          <CardHeader className="flex w-full flex-row items-center justify-between gap-1">
            <CardTitle className="block">{popup.name}</CardTitle>
          </CardHeader>
          <PopupMenu className="absolute -right-1 top-0 translate-x-full" id={id} onClose={onClose} popup={popup} />

          <CardContent>{children}</CardContent>
        </Card>
      </Draggable>
    );
  }
);
