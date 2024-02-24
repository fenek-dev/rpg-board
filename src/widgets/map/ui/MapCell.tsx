import React from 'react';

import { cn } from '~/shared/utils';

import { getTerrainFromNoiseValue } from '../utils/map';

interface MapCellProps {
  value: number;
}

export const MapCell = React.memo(({ value }: MapCellProps) => {
  const cell = getTerrainFromNoiseValue(value);
  return <div className={cn('size-8 transition-all hover:bg-input', cell?.className)}>{cell?.icon}</div>;
});
