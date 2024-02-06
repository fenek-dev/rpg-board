import { useDraggable } from "@dnd-kit/core";
import { useMemo } from "react";
import { Button } from "~/components/ui/button";

interface DraggableProps {
  top?: number;
  left?: number;
  gridSize: number;
  height: number;
  width: number;
}

export function DraggableItem({
  top,
  left,
  gridSize,
  height,
  width,
  children,
}: React.PropsWithChildren<DraggableProps>) {
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
    <Button
      variant="outline"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        ...style,
        position: "absolute",
        top,
        left,
        width: w,
        height: h,
      }}
    >
      {children}
    </Button>
  );
}
