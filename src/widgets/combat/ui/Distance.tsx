import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { cn } from '~/shared/utils';

interface DistanceProps {
  className?: string;
  distance: number;
}

export const Distance = React.forwardRef<HTMLDivElement, DistanceProps>(({ className, distance }, ref) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const rects = useMemo(() => {
    const center = distance - 1;
    const a: boolean[][] = new Array(distance * 2 - 1).fill(false).map(() => new Array(distance * 2 - 1).fill(false));

    return a.map((row, y) => row.map((_b, x) => Math.abs(x - center) + Math.abs(y - center) < distance));
  }, [distance]);

  return (
    <div
      className={cn('-z-20 opacity-0 transition-opacity', className)}
      ref={ref}
      style={{ height: gridSize, width: gridSize }}
    >
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        height={gridSize * rects.length}
        stroke="green"
        strokeWidth={1}
        width={gridSize * rects.length}
      >
        {rects.map((row, y) =>
          row.map((cell, x) => {
            if (cell) return <rect height={gridSize} width={gridSize} x={x * gridSize} y={y * gridSize} />;
            return undefined;
          })
        )}
      </svg>
    </div>
  );
});
