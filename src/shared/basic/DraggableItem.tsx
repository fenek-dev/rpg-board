import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";
import { useMemo } from "react";
import { Button } from "~/components/ui/button";

export interface DraggableItemProps
  extends Omit<React.ComponentProps<"button">, "ref"> {
  x?: number;
  y?: number;
  gridSize: number;
  height: number;
  width: number;
}

export const DraggableItem = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<DraggableItemProps>
>(({ x, y, gridSize, height, width, children, ...props }, ref) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id || crypto.randomUUID(),
    data: {
      type: "item",
    },
  });

  const { setNodeRef: nodeRef } = useDroppable({
    id: props.id || crypto.randomUUID(),
    data: {
      type: "item",
    },
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
      {...listeners}
      {...attributes}
      style={{
        ...style,
        position: "absolute",
        top: y,
        left: x,
        width: w,
        height: h,
      }}
      {...props}
      ref={(el) => {
        setNodeRef(el);
        nodeRef(el);
        if (ref) {
          if (typeof ref === "function") {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      }}
    >
      {children}
    </Button>
  );
});

DraggableItem.displayName = "DraggableItem";
