import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { Stages } from '~/entities/extendable/map';

import { Room, generateMap } from '../utils/map';

export interface MapState {
  currentPosition: [number, number];
  graph: Room[][];
  height: number;
  seed: number;
  selectedCell: [number, number];
  stage: Stages;
  width: number;
}

const initialState: MapState = {
  currentPosition: [0, 3],
  graph: generateMap(0, 7, 15),
  height: 15,
  seed: 0,
  selectedCell: [0, 3],
  stage: Stages.FIRST,
  width: 7,
};

export const mapSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
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
      state.graph = generateMap(action.payload, state.width, state.height);
      state.currentPosition = [0, Math.floor(state.width / 2)];
    },
    nextStage: (state, action: PayloadAction<Stages>) => {
      state.stage = action.payload;
      state.seed += 1;
      state.graph = generateMap(state.seed, state.width, state.height);
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
