import { random } from 'lodash-es';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { boardPositionStyle } from '~/shared/utils';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { generateTerrain, selectCell } from '../store/map.slice';
import { MapCell } from './MapCell';
import { MapDetails } from './MapDetails';

export const MapPopup = React.memo(() => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const dispatch = useDispatch();
  const { height, seed, terrain, width } = useSelector((state: RootState) => state.map);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  const onCellClick = useCallback((x: number, y: number) => {
    dispatch(selectCell({ x, y }));
  }, []);

  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <Badge className="mb-2" onClick={updateMap} variant="outline">
        Seed: {seed}
      </Badge>
      <div className="flex items-stretch" style={{ height: boardPositionStyle(gridSize, width, height).height }}>
        <MapDetails />
        <div
          className="cursor-cell overflow-hidden rounded-md border border-input text-center text-2xl"
          style={boardPositionStyle(gridSize, width, height)}
        >
          {terrain.map((row, i) => (
            <div className="flex" key={i}>
              {row.map((cell, j) => (
                <MapCell gridSize={gridSize} key={`${i}-${j}`} onCellClick={onCellClick} value={cell} x={j} y={i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </SimpleDraggablePopup>
  );
});
