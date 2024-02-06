import {
  DndContext,
  Modifiers,
  MouseSensor,
  PointerActivationConstraint,
  TouchSensor,
  defaultCoordinates,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { createSnapModifier, restrictToWindowEdges } from "@dnd-kit/modifiers";
import React from "react";
import { Grid } from "../layout";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { Draggable } from "~/shared/basic";

export const DndBoard = ({ children }: React.PropsWithChildren) => {
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
        onDragEnd={({ delta }) => {
          setCoordinates(({ x, y }) => ({
            x: x + delta.x,
            y: y + delta.y,
          }));
        }}
        modifiers={[snapToGrid, restrictToWindowEdges]}
      >
        <Draggable top={y} left={x} gridSize={gridSize} height={4} width={8} />
        {children}
      </DndContext>
      <Grid size={gridSize} />
    </>
  );
};
