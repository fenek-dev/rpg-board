import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { usePopups } from '../contexts/Popups.context';
import { RootState } from '../store';

export const PopupsBoard = ({ children }: React.PropsWithChildren) => {
  const { updatePopupPosition } = usePopups();

  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: gridSize / 2,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: gridSize / 2,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext
      autoScroll={false}
      //   modifiers={[restrictToParentElement]}
      onDragEnd={({ active, delta }) => {
        updatePopupPosition(active.id as string, delta.x, delta.y);
      }}
      sensors={sensors}
    >
      {children}
    </DndContext>
  );
};
