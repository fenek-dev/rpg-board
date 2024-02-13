import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { get, set, unset } from 'lodash-es';

import { Popup, SerializedPopups } from './popups.types';

export interface PopupsState {
  popups: SerializedPopups;
}

const initialState: PopupsState = {
  popups: {
    inventory: {
      block_id: 'inventory',
      height: 20,
      width: 32,
      x: 0,
      y: 0,
    },
  },
};

export const popupsSlice = createSlice({
  initialState,
  name: 'popups',
  reducers: {
    addPopup: (state, action: PayloadAction<Popup & { id: string }>) => {
      const { id, ...payload } = action.payload;
      set(state.popups, id, payload);
    },
    changePopupPosition: (state, action: PayloadAction<{ id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;
      const popup = get(state.popups, id);

      popup.x = payload.x;
      popup.y = payload.y;

      set(state.popups, id, popup);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      unset(state.popups, action.payload);
    },
  },
});

export const { addPopup, changePopupPosition, removePopup } = popupsSlice.actions;

export default popupsSlice.reducer;
