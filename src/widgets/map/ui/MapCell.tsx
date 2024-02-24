import React from 'react';

import { getTerrainIconFromNoiseValue } from '../utils/map';

interface MapCellProps {
  value: number;
}

export const MapCell = React.memo(({ value }: MapCellProps) => {
  return (
    <div className="size-8 border border-input transition-all hover:border-foreground hover:bg-muted">
      {getTerrainIconFromNoiseValue(value)}
    </div>
  );
});
