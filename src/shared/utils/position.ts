import React from 'react';

export const boardPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize,
  padding: gridSize,
  paddingBottom: gridSize + 2,
  paddingRight: gridSize + 2,
  width: width * gridSize,
});

export const transformAppliedToGrid = (gridSize: number, x?: number, y?: number) => {
  if (x && y) return x / gridSize + y / gridSize;
  return 0;
};
