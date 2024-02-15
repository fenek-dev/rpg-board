import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { get, set, unset } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';

import { PopupData, SerializedPopups } from './popups.types';

export interface PopupsState {
  popups: SerializedPopups;
}

const initialState: PopupsState = {
  popups: {
    [BASIC_POPUPS.Gear.name]: {
      ...BASIC_POPUPS.Gear,
      x: 550,
      y: 400,
    },
    [BASIC_POPUPS.Inventory.name]: {
      ...BASIC_POPUPS.Inventory,
      x: 0,
      y: 0,
    },
    [BASIC_POPUPS.Merchant.name]: {
      ...BASIC_POPUPS.Merchant,
      x: 550,
      y: 0,
    },
  },
};

export const popupsSlice = createSlice({
  initialState,
  name: 'popups',
  reducers: {
    addPopup: (state, action: PayloadAction<PopupData>) => {
      const payload = action.payload;
      set(state.popups, payload.container_id, payload);
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
