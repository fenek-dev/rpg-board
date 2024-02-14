import React, { Suspense, useCallback } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/components/ui/card';
import { Skeleton } from '~/shared/components/ui/skeleton';
import { popupContainerPositionStyle, popupHeaderStyle } from '~/shared/utils';

import { changePopupPosition } from '../store/popups.slice';
import { Popup } from '../store/popups.types';

export interface DraggablePopupProps {
  id: string;
  popup: Popup;
}

export const DraggablePopup = React.memo(({ children, id, popup }: React.PropsWithChildren<DraggablePopupProps>) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
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
    <Draggable onStop={handleStop} position={popup}>
      <Card className="absolute z-10" id={id}>
        <CardHeader style={popupHeaderStyle(gridSize)}>
          <CardTitle>{popup.block_id}</CardTitle>
        </CardHeader>
        <Suspense
          fallback={
            <Skeleton
              className="rounded-xl border border-input"
              style={popupContainerPositionStyle(gridSize, popup.w, popup.h)}
            />
          }
        >
          <Content gridSize={gridSize} height={popup.h} width={popup.w}>
            {children}
          </Content>
        </Suspense>
      </Card>
    </Draggable>
  );
});

interface ContentProps {
  gridSize: number;
  height: number;
  width: number;
}

const Content = React.memo(({ children, gridSize, height, width }: React.PropsWithChildren<ContentProps>) => (
  <CardContent onMouseDown={(e) => e.stopPropagation()} style={popupContainerPositionStyle(gridSize, width, height)}>
    {children}
  </CardContent>
));
