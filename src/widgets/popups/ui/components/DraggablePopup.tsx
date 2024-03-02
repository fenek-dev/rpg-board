import React, { useCallback } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/components/ui/card';
import { popupContainerPositionStyle, popupHeaderStyle } from '~/shared/utils';

import { selectPopupById } from '../../store/popups.selector';
import { changePopupPosition } from '../../store/popups.slice';
import { PopupMenu } from './PopupMenu';

export interface DraggablePopupProps {
  id: string;
}

export const DraggablePopup = React.memo(({ children, id }: React.PropsWithChildren<DraggablePopupProps>) => {
  const nodeRef = React.useRef(null);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
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
      <Card className="absolute z-10 flex cursor-move flex-col items-center" id={id} ref={nodeRef}>
        <PopupMenu className="absolute -right-1 top-0 translate-x-full" id={id} popup={popup} />

        <CardHeader
          className="flex w-full select-none flex-row items-center justify-between gap-1"
          style={popupHeaderStyle(gridSize)}
        >
          <CardTitle className="block">{popup.name}</CardTitle>
        </CardHeader>
        <Content gridSize={gridSize} height={popup.h} width={popup.w}>
          {children}
        </Content>
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
  <CardContent style={popupContainerPositionStyle(gridSize, width, height)}>{children}</CardContent>
));
