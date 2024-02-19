export const adjustPosition = (event: React.DragEvent<HTMLElement>, cellSize: number, cols: number, rows: number) => {
  const gridRect = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - gridRect.left;
  const offsetY = event.clientY - gridRect.top;

  const x = Math.max(Math.min(Math.floor(offsetX / cellSize), cols - 1), 0);
  const y = Math.max(Math.min(Math.floor(offsetY / cellSize), rows - 1), 0);

  return { x, y };
};
