import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';

export interface SettingsState {
  gridSize: number;
  height: number;
  theme: string;
  width: number;
}

const initialState: SettingsState = {
  gridSize: 32,
  height: 20,
  theme: 'dark',
  width: 32,
};

export const settingsSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.settings;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'settings',
  reducers: {
    changeGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
    },
    changeHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    changeWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
  },
});

export const { changeGridSize, changeHeight, changeTheme, changeWidth } = settingsSlice.actions;

export default settingsSlice.reducer;
