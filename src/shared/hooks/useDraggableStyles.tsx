import { Transform } from '@dnd-kit/utilities';
import { useMemo } from 'react';

import { transformAppliedToGrid } from '../utils';

export const useDraggableStyles = (
  gridSize: number,
  width: number,
  height: number,
  x?: number,
  y?: number,
  transform?: Transform | null
) => {
  const [w, h] = [gridSize * width - 2, gridSize * height - 2];

  const style = useMemo<React.CSSProperties>(
    () => ({
      height: h,
      left: x,
      position: 'absolute',
      top: y,
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      width: w,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, w, x, y, transformAppliedToGrid(gridSize, transform?.x, transform?.y)]
  );

  return style;
};
