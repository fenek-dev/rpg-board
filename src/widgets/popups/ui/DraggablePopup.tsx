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

  const [w, h] = [gridSize * width - 2, gridSize * height - 2];

  const style = useMemo<React.CSSProperties>(
    () => ({
      left: x * gridSize,
      position: 'absolute',
      top: y * gridSize,
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, w, x, y, transform?.x, transform?.y]
  );
  return (
    <Card className="absolute z-10" id={id} ref={setNodeRef} style={style} {...listeners}>
      <CardContent style={popupContainerPositionStyle(gridSize, width, height)}>{children}</CardContent>
    </Card>
  );
});
