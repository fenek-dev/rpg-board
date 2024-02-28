import { random } from 'lodash-es';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { ScrollArea } from '~/shared/components/ui/scroll-area';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { generateTerrain, selectCell, travelTo } from '../store/map.slice';
import { MapCell } from './MapCell';
import { MapDetails } from './MapDetails';

export const MapPopup = React.memo(() => {
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
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <div className="flex gap-2">
        <Badge onClick={updateMap} variant="outline">
          Seed: {seed}
        </Badge>
      </div>
      <div className="flex h-[26rem] gap-4">
        <ScrollArea className="my-4 h-96">
          <div className="relative flex flex-col gap-4 py-2">
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
        </ScrollArea>
        <MapDetails />
      </div>
    </SimpleDraggablePopup>
  );
});
