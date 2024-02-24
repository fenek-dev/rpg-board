import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { getTerrainFromNoiseValue } from '../utils/map';

export const MapDetails = () => {
  const { selectedCell, terrain } = useSelector((state: RootState) => state.map);
  const cell = getTerrainFromNoiseValue(terrain[selectedCell[1]][selectedCell[0]]);
  return (
    <div className=" mr-2 flex h-full w-60 flex-col rounded-md border border-input p-2">
      <h3 className="text-2xl font-bold">{cell?.name}</h3>
    </div>
  );
};
