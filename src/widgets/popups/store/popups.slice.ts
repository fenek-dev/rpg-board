import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import get from 'lodash/get';
import set from 'lodash/set';
import unset from 'lodash/unset';

import { getPathFromComposedId } from '~/shared/utils';

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
      const path = getPathFromComposedId(id);
      const popup = get(state.popups, path);

      popup.x += payload.x;
      popup.y += payload.y;
      console.log(popup);

      set(state.popups, path, popup);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      const path = getPathFromComposedId(action.payload);

      unset(state.popups, path);
    },
  },
});

export const { addPopup, changePopupPosition, removePopup } = popupsSlice.actions;

export default popupsSlice.reducer;
