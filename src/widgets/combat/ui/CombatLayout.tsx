import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { cn } from '~/shared/utils';
import { adjustPosition } from '~/widgets/grid/utils/position';

import { CombatBelongs, CombatEntity } from '../store/combat.types';
import { Distance } from './Distance';

interface CombatLayoutProps {
  className?: string;
  cols: number;
  onPlayerMove?: (x: number, y: number) => void;
  rows: number;
}

export const CombatLayout = ({
  children,
  className,
  cols,
  onPlayerMove,
  rows,
}: React.PropsWithChildren<CombatLayoutProps>) => {
  const player = useSelector((state: RootState) => state.combat.player);
  const walkDistance = useSelector((state: RootState) => state.player.stats.walk_distance);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const width = gridSize * cols + 1;
  const height = gridSize * rows + 1;

  const overlay = useRef<HTMLDivElement>(null);
  const distanceRef = useRef<HTMLDivElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const droppedElement = event.dataTransfer.getData('entity');
    if (distanceRef.current) {
      distanceRef.current.style.opacity = '0';
    }
    const { x, y } = adjustPosition(event, gridSize, cols, rows);

    const entity = JSON.parse(droppedElement) as CombatEntity;

    const distance = Math.abs(x - player?.x) + Math.abs(y - player?.y);

    if (
      onPlayerMove &&
      entity.w + x <= cols &&
      entity.h + y <= rows &&
      entity.belong === CombatBelongs.PLAYER &&
      player &&
      distance <= walkDistance
    )
      onPlayerMove(x, y);
    overlay.current!.classList.remove('grid-placeholder');

    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    const { x, y } = adjustPosition(event, gridSize, cols, rows);

    const entity = window.entity;

    const distance = Math.abs(x - player?.x) + Math.abs(y - player?.y);

    if (player && distanceRef.current) {
      distanceRef.current.style.transform = `translate(${player.x * gridSize}px, ${player.y * gridSize}px)`;
      distanceRef.current.style.opacity = '1';
    } else if (distanceRef.current) {
      distanceRef.current.style.opacity = '0';
    }

    if (!entity || !player || entity?.w + x > cols || entity?.h + y > rows || distance > walkDistance)
      return overlay.current!.classList.remove('grid-placeholder');

    overlay.current!.style.transform = `translate(${x * gridSize}px, ${y * gridSize}px)`;
    overlay.current!.classList.add('grid-placeholder');
    overlay.current!.style.height = `${(entity?.h || 1) * gridSize}px`;
    overlay.current!.style.width = `${(entity?.w || 1) * gridSize}px`;

    event.dataTransfer.dropEffect = 'move';

    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    overlay.current!.classList.remove('grid-placeholder');
    if (distanceRef.current) {
      distanceRef.current.style.opacity = '0';
    }
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
      <Grid />
      <Distance className="absolute left-0 top-0" distance={walkDistance + 1} ref={distanceRef} />
    </div>
  );
};
