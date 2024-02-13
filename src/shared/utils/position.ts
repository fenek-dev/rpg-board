import React from 'react';

export const boardPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize + 1,
  width: width * gridSize + 1,
});

export const popupContainerPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize + 1,
  margin: gridSize,
  width: width * gridSize + 1,
});
