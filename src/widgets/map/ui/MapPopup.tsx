import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

const getIconFromNoiseValue = (value: number) => {
  if (value < -70) return '🌊';
  if (value < 0) return '🌱';
  if (value < 8) return '🌾';
  if (value < 40) return '🌿';
  if (value < 80) return '🌳';
  if (value <= 100) return '⛰️';
};

export const MapPopup = React.memo(() => {
  const { seed, terrain } = useSelector((state: RootState) => state.map);
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <Badge variant="outline">Seed: {seed}</Badge>
      <div className="text-center text-xl">
        {terrain.map((row, i) => (
          <div className="flex" key={i}>
            {row.map((cell, j) => {
              return (
                <div className="size-8 " key={`${i}-${j}`}>
                  {getIconFromNoiseValue(cell * 100)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </SimpleDraggablePopup>
  );
});
