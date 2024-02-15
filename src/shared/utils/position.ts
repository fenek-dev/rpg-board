import React from 'react';

export const boardPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize + 1,
  width: width * gridSize + 1,
});

export const popupContainerPositionStyle = (gridSize: number, width: number, height: number): React.CSSProperties => ({
  height: height * gridSize + 1,
  margin: gridSize / 2,
  marginTop: 0,
  width: width * gridSize + 1,
});

export const popupHeaderStyle = (gridSize: number): React.CSSProperties => ({
  padding: gridSize / 2,
  paddingBottom: gridSize / 4,
  paddingTop: gridSize / 4,
});
