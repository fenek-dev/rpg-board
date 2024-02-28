import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { Terrain } from '~/entities/extendable/map';

import { generateGraph } from '../utils/map';

const STAGE_RANGE = 3;

export interface MapState {
  currentPosition: [number, number];
  graph: Terrain[][];
  height: number;
  seed: number;
  selectedCell: [number, number];
  stage: number;
  width: number;
}

const initialState: MapState = {
  currentPosition: [0, 0],
  graph: generateGraph(0, 6, 15, 1, 1 + STAGE_RANGE),
  height: 15,
  seed: 0,
  selectedCell: [0, 0],
  stage: 1,
  width: 6,
};

export const mapSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        console.log('hello');

        state = action.payload.map;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'map',
  reducers: {
    generateTerrain: (state, action: PayloadAction<number>) => {
      state.seed = action.payload;
      state.graph = generateGraph(action.payload, state.width, state.height, state.stage, state.stage + STAGE_RANGE);
    },
    nextStage: (state) => {
      state.stage += 1;
      state.seed += 1;
      state.graph = generateGraph(state.seed, state.width, state.height, state.stage, state.stage + STAGE_RANGE);
    },
    selectCell: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      state.selectedCell = [x, y];
    },
    travelTo: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      if (state.currentPosition[0] === x && state.currentPosition[1] === y) return;
      state.currentPosition = [x, y];
    },
    unselectCell: (state) => {
      state.selectedCell = [-1, -1];
    },
  },
});

export const { generateTerrain, nextStage, selectCell, travelTo, unselectCell } = mapSlice.actions;

export default mapSlice.reducer;
