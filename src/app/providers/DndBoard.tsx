import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Coordinates } from '@dnd-kit/core/dist/types';
import { createSnapModifier } from '@dnd-kit/modifiers';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BlockTypes, changeBlockPosition } from '~/widgets/blocks/store';
import { changePopupPosition } from '~/widgets/popups/store/popups.slice';

import { Grid } from '../layout';
import { RootState } from '../store';

interface DndBoardProps {}

export const DndBoard = ({ children }: React.PropsWithChildren<DndBoardProps>) => {
  const dispatch = useDispatch();

  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const snapToGrid = React.useMemo(() => createSnapModifier(gridSize), [gridSize]);

  const applyToGrid = useCallback(
    (delta: Coordinates) => {
      return {
        x: Math.round(delta.x / gridSize),
        y: Math.round(delta.y / gridSize),
      };
    },
    [gridSize]
  );

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
      cancelDrop={({ active, over }) => {
        return active.data.current?.type === over?.data.current?.type && active.id !== over?.id;
      }}
      modifiers={[snapToGrid]}
      onDragEnd={({ active, delta }) => {
        if (active.data.current?.type === BlockTypes.Popup) {
          dispatch(
            changePopupPosition({
              id: active.id as string,
              ...applyToGrid(delta),
            })
          );
        } else {
          dispatch(
            changeBlockPosition({
              id: active.id as string,
              ...applyToGrid(delta),
            })
          );
        }
      }}
      sensors={sensors}
    >
      {children}

      <Grid size={gridSize} />
    </DndContext>
  );
};
