import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';

export type ScreenTypes = 'combat' | 'event' | 'map' | 'shop';

export interface ScreenState {
  current_screen: ScreenTypes;
}

const initialState: ScreenState = {
  current_screen: 'map',
};

export const screenSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.screen;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'screen',
  reducers: {
    changeCurrentScreen: (state, action: PayloadAction<ScreenTypes>) => {
      state.current_screen = action.payload;
    },
  },
});

export const { changeCurrentScreen } = screenSlice.actions;

export default screenSlice.reducer;
