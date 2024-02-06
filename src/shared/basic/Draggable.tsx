import { useDraggable } from "@dnd-kit/core";
import { useMemo } from "react";

interface DraggableProps {
  top?: number;
  left?: number;
  gridSize: number;
  height: number;
  width: number;
}

export function Draggable({
  top,
  left,
  gridSize,
  height,
  width,
}: DraggableProps) {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: "draggable",
    });

  const [w, h] = useMemo(
    () => [gridSize * width - 2, gridSize * height - 2],
    [gridSize, height, width]
  );

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        ...style,
        position: "absolute",
        top,
        left,
        background: "blue",
        width: w,
        height: h,
      }}
    />
  );
}
