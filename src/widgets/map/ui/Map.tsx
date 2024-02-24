import React, { useMemo, useState } from 'react';

import BASIC_POPUPS from '~/entities/constant/popup';
import { Button } from '~/shared/components/ui/button';
import { minMax } from '~/shared/utils/random';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { getNoiseMap } from '../utils/map';

const getIconFromNoiseValue = (value: number) => {
  if (value < -70) return '🌊';
  if (value < 0) return '🌱';
  if (value < 8) return '🌾';
  if (value < 40) return '🌿';
  if (value < 80) return '🌳';
  if (value <= 100) return '⛰️';
};

export const MapPopup = React.memo(() => {
  const [seed, setSeed] = useState(0);

  const arr = useMemo(() => getNoiseMap(seed, 20, 20), [seed]);
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <Button onClick={() => setSeed(minMax(0, 100000))} variant="outline">
        update seed
      </Button>
      <div className="text-xl">
        {arr.map((row, i) => (
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
