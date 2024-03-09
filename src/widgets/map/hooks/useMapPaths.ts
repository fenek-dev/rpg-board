import { useEffect, useRef } from 'react';

export const useMapPaths = (w: number, seed: number) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (gridRef.current && svgRef.current) {
      svgRef.current.innerHTML = '';
      const gridCells = Array.from(gridRef.current.querySelectorAll('[role="gridcell"]'));

      const table: Element[][] = [];

      gridCells.forEach((cell, i) => {
        const x = Math.floor(i / w);
        const y = i % w;

        if (!table[x]) {
          table[x] = [];
        }

        table[x][y] = cell;
      });

      const gridRect = gridRef.current.getBoundingClientRect();
      table.forEach((row, x) => {
        row.forEach((cell) => {
          if (cell instanceof HTMLDivElement) return;
          const nextRooms = cell.getAttribute('data-grid')?.split(',').map(Number);
          const cellRect = cell.getBoundingClientRect();

          if (nextRooms && x < table.length - 1) {
            nextRooms.forEach((nextRoomIndex) => {
              const nextRoom = table[x + 1][nextRoomIndex];
              const nextRoomRect = nextRoom.getBoundingClientRect();
              const svg = svgRef.current;
              if (svg && nextRoom) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                path.setAttribute('x1', String(cellRect.x + cellRect.width / 2 - gridRect.x));
                path.setAttribute('y1', String(cellRect.y + cellRect.height / 2 - gridRect.y));
                path.setAttribute('x2', String(nextRoomRect.x + nextRoomRect.width / 2 - gridRect.x));
                path.setAttribute('y2', String(nextRoomRect.y + nextRoomRect.height / 2 - gridRect.y));
                path.setAttribute('stroke', 'hsl(var(--input))');
                path.setAttribute('stroke-dasharray', '10,10');
                path.setAttribute('stroke-width', '4');
                svg.appendChild(path);
              }
            });
          }
        });
      });
    }
  }, [gridRef, w, seed]);

  return { gridRef, svgRef };
};
