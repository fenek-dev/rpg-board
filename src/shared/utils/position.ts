import React from 'react';

export const boardPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize - gridSize / 10,
  width: width * gridSize - gridSize / 10,
});

export const popupContainerPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize - gridSize / 10,
  margin: gridSize,
  width: width * gridSize - gridSize / 10,
});

export const transformAppliedToGrid = (gridSize: number, value?: number) => {
  if (value) return value / gridSize;
  return 0;
};
