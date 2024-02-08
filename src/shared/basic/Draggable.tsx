import { useDraggable } from '@dnd-kit/core';
import { useMemo } from 'react';

interface DraggableProps {
  gridSize: number;
  height: number;
  left?: number;
  top?: number;
  width: number;
}

export function Draggable({
  gridSize,
  height,
  left,
  top,
  width,
}: DraggableProps) {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: 'draggable',
    });

  const [w, h] = useMemo(
    () => [gridSize * width - 2, gridSize * height - 2],
    [gridSize, height, width],
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
        background: 'blue',
        height: h,
        left,
        position: 'absolute',
        top,
        width: w,
      }}
    />
  );
}
