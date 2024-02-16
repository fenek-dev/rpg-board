export const adjustPosition = (event: React.DragEvent<HTMLElement>, cellSize: number, cols: number, rows: number) => {
  const x = Math.min(Math.round(event.nativeEvent.offsetX / cellSize), cols - 1);
  const y = Math.min(Math.round(event.nativeEvent.offsetY / cellSize), rows - 1);

  return { x, y };
};
