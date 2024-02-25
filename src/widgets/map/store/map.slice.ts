import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { Terrain } from '~/entities/extendable/map';

import { generateGraph, getTurnsUntilFog } from '../utils/map';

export interface MapState {
  currentPosition: [number, number];
  fog: number;
  graph: Terrain[][];
  height: number;
  seed: number;
  selectedCell: [number, number];
  turn: number;
  turnsBeforeFogMove: number;
  width: number;
}

const initialState: MapState = {
  currentPosition: [0, 0],
  fog: 0,
  graph: generateGraph(0, 6, 15),
  height: 15,
  seed: 0,
  selectedCell: [0, 0],
  turn: 1,
  turnsBeforeFogMove: 3,
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
      state.graph = generateGraph(action.payload, state.width, state.height);
    },
    selectCell: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      state.selectedCell = [x, y];
    },
    travelTo: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      if (state.currentPosition[0] === x && state.currentPosition[1] === y) return;
      state.currentPosition = [x, y];
      state.turn += 1;
      if (getTurnsUntilFog(state.turn, state.turnsBeforeFogMove) === state.turnsBeforeFogMove) {
        state.fog += 1;
      }
    },
    unselectCell: (state) => {
      state.selectedCell = [-1, -1];
    },
  },
});

export const { generateTerrain, selectCell, travelTo, unselectCell } = mapSlice.actions;

export default mapSlice.reducer;
