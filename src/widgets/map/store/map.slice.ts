import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getNoiseMap } from '../utils/map';

export interface MapState {
  height: number;
  seed: number;
  terrain: number[][];
  width: number;
}

const initialState: MapState = {
  height: 20,
  seed: 0,
  terrain: getNoiseMap(0, 15, 20),
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
  },
});

export const { generateTerrain } = mapSlice.actions;

export default mapSlice.reducer;
