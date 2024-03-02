import { random } from 'lodash-es';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Badge } from '~/shared/components/ui/badge';
import { ScrollArea } from '~/shared/components/ui/scroll-area';

import { generateTerrain, selectCell, travelTo } from '../store/map.slice';
import { MapCell } from './MapCell';

export const MapScreen = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, seed, selectedCell } = useSelector((state: RootState) => state.map);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  const onCellClick = useCallback((x: number, y: number) => {
    dispatch(selectCell({ x, y }));
  }, []);

  const onTravel = useCallback((x: number, y: number) => {
    dispatch(
      travelTo({
        x,
        y,
      })
    );
  }, []);

  return (
    <div className="w-full overflow-scroll">
      <div className="flex gap-2">
        <Badge onClick={updateMap} variant="outline">
          Seed: {seed}
        </Badge>
      </div>

      <div className="relative flex flex-col-reverse gap-4">
        {graph.map((row, i) => {
          const disabled = Math.abs(i - currentPosition[0]) > 1 || currentPosition[0] >= i;
          return (
            <div className="flex justify-around gap-2" key={i}>
              {row.map((cell, j) => {
                const isSelected = selectedCell[0] === i && selectedCell[1] === j;
                const isCurrentPosition = currentPosition[0] === i && currentPosition[1] === j;
                return (
                  <MapCell
                    disabled={disabled && !isCurrentPosition}
                    icon={cell.icon}
                    isCurrentPosition={isCurrentPosition}
                    isSelected={isSelected}
                    key={`${i}-${j}`}
                    onClick={onCellClick}
                    onDoubleClick={onTravel}
                    subicon={cell.subicon}
                    x={i}
                    y={j}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
});
