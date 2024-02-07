import { DndContext } from "@dnd-kit/core";
import { createSnapModifier, restrictToWindowEdges } from "@dnd-kit/modifiers";
import React, { useCallback } from "react";
import { Grid } from "../layout";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { useDispatch } from "react-redux";
import { changeBlockPosition } from "../store";

export const DndBoard = ({ children }: React.PropsWithChildren) => {
  const dispatch = useDispatch();

  const [gridSize, setGridSize] = React.useState(30);

  const snapToGrid = React.useMemo(
    () => createSnapModifier(gridSize),
    [gridSize]
  );

  const applyToGrid = useCallback(
    (delta: Coordinates) => {
      return {
        x: Math.ceil(delta.x / gridSize) * gridSize,
        y: Math.ceil(delta.y / gridSize) * gridSize,
      };
    },
    [gridSize]
  );

  return (
    <>
      <DndContext
        autoScroll={false}
        onDragEnd={({ delta, active }) => {
          dispatch(
            changeBlockPosition({
              id: active.id,
              ...applyToGrid(delta),
            })
          );
        }}
        cancelDrop={({ active, over }) => {
          return active.data.current?.type === over?.data.current?.type;
        }}
        modifiers={[snapToGrid, restrictToWindowEdges]}
      >
        {children}
      </DndContext>
      <Grid size={gridSize} />
    </>
  );
};
