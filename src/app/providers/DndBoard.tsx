import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Coordinates } from '@dnd-kit/core/dist/types';
import { createSnapModifier, restrictToParentElement } from '@dnd-kit/modifiers';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeBlockPosition } from '~/widgets/blocks/store';

import { Grid } from '../layout';
import { RootState } from '../store';

export const DndBoard = ({ children }: React.PropsWithChildren) => {
  const dispatch = useDispatch();

  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const snapToGrid = React.useMemo(() => createSnapModifier(gridSize), [gridSize]);

  const applyToGrid = useCallback(
    (delta: Coordinates) => {
      return {
        x: Math.ceil(delta.x / gridSize),
        y: Math.ceil(delta.y / gridSize),
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
      modifiers={[snapToGrid, restrictToParentElement]}
      onDragEnd={({ active, delta }) => {
        dispatch(
          changeBlockPosition({
            id: active.id as string,
            ...applyToGrid(delta),
          })
        );
      }}
      sensors={sensors}
    >
      {children}

      <Grid size={gridSize} />
    </DndContext>
  );
};
