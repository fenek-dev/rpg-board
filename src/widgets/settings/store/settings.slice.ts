import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
  gridSize: number;
  height: number;
  theme: string;
  width: number;
}

const initialState: SettingsState = {
  gridSize: 32,
  height: 26,
  theme: 'dark',
  width: 48,
};

export const settingsSlice = createSlice({
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
