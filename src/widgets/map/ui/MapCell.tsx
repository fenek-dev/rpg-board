import React from 'react';

import { cn } from '~/shared/utils';

import { getTerrainFromNoiseValue } from '../utils/map';

interface MapCellProps {
  gridSize: number;
  onCellClick: (x: number, y: number) => void;
  value: number;
  x: number;
  y: number;
}

export const MapCell = React.memo(({ gridSize, onCellClick, value, x, y }: MapCellProps) => {
  const cell = getTerrainFromNoiseValue(value);

  return (
    <div
      className={cn('transition-all hover:bg-input', cell?.className)}
      onClick={() => onCellClick(x, y)}
      style={{ height: gridSize, width: gridSize }}
    >
      {cell?.icon}
    </div>
  );
});
