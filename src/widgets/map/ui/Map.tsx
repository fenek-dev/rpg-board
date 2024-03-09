import { random } from 'lodash-es';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { getCombatTypeFromTerrain } from '~/entities/stage/stages';
import { Badge } from '~/shared/components/ui/badge';
import { startCombat } from '~/widgets/combat/store/combat.slice';
import { changeCurrentScreen } from '~/widgets/screen/store/screen.slice';

import { useMapPaths } from '../hooks/useMapPaths';
import { generateTerrain, selectCell, travelTo } from '../store/map.slice';
import { MapCell } from './MapCell';

export const MapScreen = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, seed, selectedCell, stage, width } = useSelector((state: RootState) => state.map);

  const { gridRef, svgRef } = useMapPaths(width, seed);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  const onTravel = useCallback(
    (x: number, y: number) => {
      if (currentPosition[0] === x && currentPosition[1] === y) return;
      const item = graph[x][y];
      dispatch(
        travelTo({
          x,
          y,
        })
      );
      if ([TERRAIN_CELLS.Boss.id, TERRAIN_CELLS.Elite.id, TERRAIN_CELLS.Fight.id].includes(item.cell!.id!)) {
        dispatch(startCombat({ seed: item.cell!.seed!, stage, type: getCombatTypeFromTerrain(item.cell!) }));
        dispatch(changeCurrentScreen('combat'));
      }
      dispatch(selectCell({ x, y }));
    },
    [currentPosition[0], currentPosition[1], seed]
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-scroll py-10">
      <div className="flex gap-2">
        <Badge onClick={updateMap} variant="outline">
          Seed: {seed}
        </Badge>
      </div>

      <div
        className="grid- relative mt-4 inline-grid items-center justify-center gap-12 gap-x-20"
        ref={gridRef}
        style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
      >
        <svg className="absolute -z-50 overflow-visible" height="100%" ref={svgRef} width="100%" />
        {graph.map((row, i) => {
          const disabled = Math.abs(i - currentPosition[0]) > 1 || currentPosition[0] >= i;
          return row.map((room, j) => {
            if (!room.cell) return <div key={`${i}-${j}`} role="gridcell" />;

            const isSelected = selectedCell[0] === i && selectedCell[1] === j;
            const isCurrentPosition = currentPosition[0] === i && currentPosition[1] === j;

            const currentCell = graph[currentPosition[0]][currentPosition[1]];

            const isNextRoom = currentCell.next.includes(j) && i === currentPosition[0] + 1;

            return (
              <MapCell
                disabled={disabled || isCurrentPosition || !isNextRoom}
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
