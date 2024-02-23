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

    const block = JSON.parse(droppedElement) as Block;

    if (onItemDrop && block.w + x <= cols && block.h + y <= rows) onItemDrop(x, y, block, element_id, id);
    overlay.current!.classList.remove('grid-placeholder');

    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    const { x, y } = adjustPosition(event, gridSize, cols, rows);
    overlay.current!.style.transform = `translate(${x * gridSize}px, ${y * gridSize}px)`;
    overlay.current!.classList.add('grid-placeholder');
    overlay.current!.style.height = `${(window.dragging?.h || 1) * gridSize}px`;
    overlay.current!.style.width = `${(window.dragging?.w || 1) * gridSize}px`;

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
      <div className="-z-10" ref={overlay} />
      {children}
      <Grid size={gridSize} />
    </div>
  );
};
