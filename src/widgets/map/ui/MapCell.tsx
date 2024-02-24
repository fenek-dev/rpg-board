import React from 'react';

import { cn } from '~/shared/utils';

import { getTerrainFromNoiseValue } from '../utils/map';

interface MapCellProps {
  gridSize: number;
  isSelected: boolean;
  onCellClick: (x: number, y: number) => void;
  value: number;
  x: number;
  y: number;
}

export const MapCell = React.memo(({ gridSize, isSelected, onCellClick, value, x, y }: MapCellProps) => {
  const cell = getTerrainFromNoiseValue(value);

  return (
    <div
      className={cn(
        'transition-all hover:bg-input',
        {
          'ping border border-primary': isSelected,
        },
        cell?.className
      )}
      onClick={() => onCellClick(x, y)}
      style={{ height: gridSize, width: gridSize }}
    >
      {cell?.icon}
    </div>
  );
});
