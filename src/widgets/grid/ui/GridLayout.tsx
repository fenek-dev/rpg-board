import React, { useRef } from 'react';

import { Grid } from '~/app/layout';
import { cn } from '~/shared/utils';
import { Block } from '~/widgets/blocks/store';

import { adjustPosition } from '../utils/position';

interface GridProps {
  cellSize: number;
  className?: string;
  cols: number;
  onItemDrop?: (x: number, y: number, item: Block) => void;
  rows: number;
}

export const GridLayout: React.FC<GridProps> = ({ cellSize, className, cols, onItemDrop, rows }) => {
  const width = cellSize * cols;
  const height = cellSize * rows;

  const overlay = useRef<HTMLDivElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const droppedElement = event.dataTransfer.getData('block');
    const { x, y } = adjustPosition(event, cellSize, cols, rows);

    if (onItemDrop) onItemDrop(x, y, JSON.parse(droppedElement) as Block);
    overlay.current!.classList.remove('grid-placeholder');

    event.preventDefault();
    event.stopPropagation();
  };
  const handleDropOver = (event: React.DragEvent<HTMLDivElement>) => {
    const { x, y } = adjustPosition(event, cellSize, cols, rows);

    overlay.current!.style.transform = `translate(${x * cellSize}px, ${y * cellSize}px)`;
    overlay.current!.classList.add('grid-placeholder');

    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    overlay.current!.classList.remove('grid-placeholder');
  };

  return (
    <div
      className={cn('relative', className)}
      onDragLeave={handleDragLeave}
      onDragOver={handleDropOver}
      onDrop={handleDrop}
      style={{ height, width }}
    >
      <div className="-z-10" ref={overlay} style={{ height: cellSize, width: cellSize }} />
      <Grid size={cellSize} />
    </div>
  );
};
