import { DndContext, defaultCoordinates } from "@dnd-kit/core";
import { createSnapModifier, restrictToWindowEdges } from "@dnd-kit/modifiers";
import React from "react";
import { Grid } from "../layout";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { ThirstyBar } from "~/widgets/player/ThirstryBar";
import { UI_BLOCKS } from "../enum/blocks";
import { useDispatch } from "react-redux";
import { changeBlockPosition } from "../store";

export const DndBoard = ({ children }: React.PropsWithChildren) => {
  const dispatch = useDispatch();
  const [{ x, y }, setCoordinates] =
    React.useState<Coordinates>(defaultCoordinates);

  const [gridSize, setGridSize] = React.useState(30);

  const snapToGrid = React.useMemo(
    () => createSnapModifier(gridSize),
    [gridSize]
  );

  return (
    <>
      <DndContext
        autoScroll={false}
        onDragEnd={({ delta, activatorEvent, active, collisions }) => {
          dispatch(
            changeBlockPosition({ id: active.id, x: delta.x, y: delta.y })
          );
        }}
        modifiers={[snapToGrid, restrictToWindowEdges]}
      >
        {children}
      </DndContext>
      <Grid size={gridSize} />
    </>
  );
};
