import { useDraggable } from '@dnd-kit/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Card, CardContent } from '~/shared/components/ui/card';
import { popupContainerPositionStyle } from '~/shared/utils';
import { BlockTypes } from '~/widgets/blocks/store';

import { Popup } from '../store/popups.types';

export interface DraggablePopupProps {
  id: string;
  popup: Popup;
}

export const DraggablePopup = React.memo(({ children, id, popup }: React.PropsWithChildren<DraggablePopupProps>) => {
  const { height, width, x, y } = popup;
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const { listeners, setNodeRef, transform } = useDraggable({
    data: { type: BlockTypes.Popup },
    id,
  });

  const [w, h] = [gridSize * width + 1, gridSize * height + 1];

  const style = useMemo<React.CSSProperties>(
    () => ({
      left: x,
      position: 'absolute',
      top: y,
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, w, x, y, transform?.x, transform?.y]
  );
  return (
    <Card className="absolute z-10" id={id} ref={setNodeRef} style={style} {...listeners}>
      <Content gridSize={gridSize} height={height} width={width}>
        {children}
      </Content>
    </Card>
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
