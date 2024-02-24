import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getNoiseMap } from '../utils/map';

export interface MapState {
  height: number;
  seed: number;
  selectedCell: [number, number];
  terrain: number[][];
  width: number;
}

const initialState: MapState = {
  height: 15,
  seed: 0,
  selectedCell: [0, 0],
  terrain: getNoiseMap(0, 15, 15),
  width: 15,
};

export const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    generateTerrain: (state, action: PayloadAction<number>) => {
      state.seed = action.payload;
      state.terrain = getNoiseMap(action.payload, state.width, state.height);
    },
    selectCell: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;

      state.selectedCell = [x, y];
      console.log(state.selectedCell);
    },
  },
});

export const { generateTerrain, selectCell } = mapSlice.actions;

export default mapSlice.reducer;
