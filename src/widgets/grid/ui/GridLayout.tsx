import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { cn } from '~/shared/utils';
import { Block } from '~/widgets/blocks/store';

import { adjustPosition } from '../utils/position';

interface GridProps {
  className?: string;
  cols: number;
  id: string;
  onItemDrop?: (x: number, y: number, item: Block, element_id: string, id: string) => void;
  rows: number;
}

export const GridLayout = ({ children, className, cols, id, onItemDrop, rows }: React.PropsWithChildren<GridProps>) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const width = gridSize * cols + 1;
  const height = gridSize * rows + 1;

  const overlay = useRef<HTMLDivElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const droppedElement = event.dataTransfer.getData('block');
    const element_id = event.dataTransfer.getData('id');

    const { x, y } = adjustPosition(event, gridSize, cols, rows);

    if (onItemDrop) onItemDrop(x, y, JSON.parse(droppedElement) as Block, element_id, id);
    overlay.current!.classList.remove('grid-placeholder');

    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    const { x, y } = adjustPosition(event, gridSize, cols, rows);
    overlay.current!.style.transform = `translate(${x * gridSize}px, ${y * gridSize}px)`;
    overlay.current!.classList.add('grid-placeholder');
    event.dataTransfer.dropEffect = 'move';

    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    overlay.current!.classList.remove('grid-placeholder');
  };

  return (
    <div
      className={cn('relative', className)}
      onDragEnd={handleDragLeave}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ height, width }}
    >
      <div className="-z-10" ref={overlay} style={{ height: gridSize, width: gridSize }} />
      {children}
      <Grid size={gridSize} />
    </div>
  );
};
