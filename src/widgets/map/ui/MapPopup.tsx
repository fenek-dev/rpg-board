import { random } from 'lodash-es';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { generateTerrain } from '../store/map.slice';
import { MapCell } from './MapCell';

export const MapPopup = React.memo(() => {
  const dispatch = useDispatch();
  const { seed, terrain } = useSelector((state: RootState) => state.map);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <Badge className="mb-2" onClick={updateMap} variant="outline">
        Seed: {seed}
      </Badge>
      <div className="cursor-cell text-center text-2xl">
        {terrain.map((row, i) => (
          <div className="flex" key={i}>
            {row.map((cell, j) => (
              <MapCell key={`${i}-${j}`} value={cell} />
            ))}
          </div>
        ))}
      </div>
    </SimpleDraggablePopup>
  );
});
