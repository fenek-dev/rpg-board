import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { get, set, unset } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import BASIC_POPUPS from '~/entities/constant/popup';

import { PopupData, SerializedPopups } from './popups.types';

export interface PopupsState {
  popups: SerializedPopups;
}

const initialState: PopupsState = {
  popups: {
    // [BASIC_POPUPS.Equipment.container_id]: {
    //   ...BASIC_POPUPS.Equipment,
    //   x: 500,
    //   y: 500,
    // },
    // [BASIC_POPUPS.Status.container_id]: {
    //   ...BASIC_POPUPS.Status,
    //   x: 50,
    //   y: 700,
    // },
  },
};

export const popupsSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.popups;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
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
