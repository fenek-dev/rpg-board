import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Block } from '~/widgets/blocks/store';

export const useGridItem = (block: Block, id: string) => {
  const isDragging = useRef(false);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    isDragging.current = true;
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('block', JSON.stringify(block));
    event.dataTransfer.setData('id', id);
    event.dataTransfer.effectAllowed = 'all';
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
    window.dragging = block;
    window.dragId = id;
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    isDragging.current = false;
    event.currentTarget.classList.remove('opacity-60');
  };

  const style: React.CSSProperties = useMemo(
    () => ({
      height: gridSize * block.h,
      left: 0,
      position: 'absolute',
      top: 0,
      transform: `translate(${block.x * gridSize}px, ${block.y * gridSize}px)`,
      width: gridSize * block.w,
    }),
    [block.h, block.w, block.x, block.y, gridSize]
  );

  return {
    isDragging,
    onDragEnd,
    onDragStart,
    style,
  };
};
