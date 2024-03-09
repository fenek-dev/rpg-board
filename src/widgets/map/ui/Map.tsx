import { random } from 'lodash-es';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Badge } from '~/shared/components/ui/badge';
import { startCombat } from '~/widgets/combat/store/combat.slice';
import { changeCurrentScreen } from '~/widgets/screen/store/screen.slice';

import { useMapPaths } from '../hooks/useMapPaths';
import { generateTerrain, selectCell, travelTo } from '../store/map.slice';
import { MapCell } from './MapCell';

export const MapScreen = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, seed, selectedCell, width } = useSelector((state: RootState) => state.map);

  const { gridRef, svgRef } = useMapPaths(width, seed);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  const onTravel = useCallback(
    (x: number, y: number) => {
      if (currentPosition[0] === x && currentPosition[1] === y) return;
      dispatch(
        travelTo({
          x,
          y,
        })
      );
      dispatch(startCombat());
      dispatch(changeCurrentScreen('combat'));
      dispatch(selectCell({ x, y }));
    },
    [currentPosition[0], currentPosition[1]]
  );

  return (
    <div className="relative my-10 flex w-full flex-col items-center justify-center overflow-scroll">
      <div className="flex gap-2">
        <Badge onClick={updateMap} variant="outline">
          Seed: {seed}
        </Badge>
      </div>

      <div className="grid- relative inline-grid grid-cols-7 items-center justify-center gap-12" ref={gridRef}>
        <svg className="absolute -z-50" height="100%" ref={svgRef} width="100%">
          <defs>
            <marker id="head" markerHeight="4" markerWidth="3" orient="auto" refX="0.1" refY="2">
              <path d="M0,0 V4 L2,2 Z" fill="black" />
            </marker>
          </defs>
        </svg>
        {graph.map((row, i) => {
          const disabled = Math.abs(i - currentPosition[0]) > 1 || currentPosition[0] >= i;
          return row.map((room, j) => {
            if (!room.cell) return <div role="gridcell" />;
            const isSelected = selectedCell[0] === i && selectedCell[1] === j;
            const isCurrentPosition = currentPosition[0] === i && currentPosition[1] === j;
            return (
              <MapCell
                disabled={disabled && !isCurrentPosition}
                icon={room.cell.icon}
                isCurrentPosition={isCurrentPosition}
                isSelected={isSelected}
                key={`${i}-${j}`}
                next={room.next.join(',')}
                onClick={onTravel}
                subicon={room.cell.subicon}
                x={i}
                y={j}
              />
            );
          });
        })}
      </div>
    </div>
  );
});
