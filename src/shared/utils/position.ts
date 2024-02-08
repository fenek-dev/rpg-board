import React from 'react';

export const boardPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize,
  padding: gridSize,
  paddingBottom: gridSize + 2,
  paddingRight: gridSize + 2,
  width: width * gridSize,
});

export const transformAppliedToGrid = (gridSize: number, value?: number) => {
  if (value) return value / gridSize;
  return 0;
};
