import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Block } from '~/widgets/blocks/store';

export const useGridItem = (block: Block, id: string) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('block', JSON.stringify(block));
    event.dataTransfer.setData('id', id);
    event.dataTransfer.effectAllowed = 'all';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
    window.dragging = block;
    window.dragId = id;
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.remove('opacity-60');
  };

  const style: React.CSSProperties = useMemo(
    () => ({
      height: gridSize,
      left: 0,
      position: 'absolute',
      top: 0,
      transform: `translate(${block.x * gridSize}px, ${block.y * gridSize}px)`,
      width: gridSize,
    }),
    [block.x, block.y, gridSize]
  );

  return {
    onDragEnd,
    onDragStart,
    style,
  };
};
