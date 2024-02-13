import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BlockTypes } from '~/widgets/blocks/store';
import { changePopupPosition } from '~/widgets/popups/store/popups.slice';

import { RootState } from '../store';

interface DndBoardProps {}

export const DndBoard = ({ children }: React.PropsWithChildren<DndBoardProps>) => {
  const dispatch = useDispatch();

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
      onDragEnd={({ active, delta }) => {
        if (active.data.current?.type === BlockTypes.Popup) {
          dispatch(
            changePopupPosition({
              id: active.id as string,
              ...delta,
            })
          );
        }
      }}
      sensors={sensors}
    >
      {children}
    </DndContext>
  );
};
