export const adjustPosition = (event: React.DragEvent<HTMLElement>, cellSize: number, cols: number, rows: number) => {
  const gridRect = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - gridRect.left;
  const offsetY = event.clientY - gridRect.top;

  const x = Math.min(Math.round(offsetX / cellSize), cols - 1);
  const y = Math.min(Math.round(offsetY / cellSize), rows - 1);

  return { x, y };
};
