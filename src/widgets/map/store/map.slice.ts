import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Terrain } from '~/entities/extendable/map';

import { generateGraph } from '../utils/map';

export interface MapState {
  currentPosition: [number, number];
  graph: Terrain[][];
  height: number;
  seed: number;
  selectedCell: [number, number];
  width: number;
}

const initialState: MapState = {
  currentPosition: [0, 0],
  graph: generateGraph(0, 6, 15),
  height: 15,
  seed: 0,
  selectedCell: [-1, -1],
  width: 15,
};

export const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    generateTerrain: (state, action: PayloadAction<number>) => {
      state.seed = action.payload;
      state.graph = generateGraph(action.payload, 6, 15);
    },
    selectCell: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      state.selectedCell = [x, y];
    },
    unselectCell: (state) => {
      state.selectedCell = [-1, -1];
    },
  },
});

export const { generateTerrain, selectCell, unselectCell } = mapSlice.actions;

export default mapSlice.reducer;
