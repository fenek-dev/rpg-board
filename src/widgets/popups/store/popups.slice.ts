import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getPathFromComposedId } from '~/shared/utils';

import { Popup, SerializedPopups } from './popups.types';

export interface PopupsState {
  popups: SerializedPopups;
}

const initialState: PopupsState = {
  popups: {},
};

export const popupsSlice = createSlice({
  initialState,
  name: 'popups',
  reducers: {
    addPopup: (state, action: PayloadAction<Popup & { id: string }>) => {
      const { id, ...payload } = action.payload;

      _.set(state.popups, id, payload);
    },
    changePopupPosition: (state, action: PayloadAction<{ id: string; x: number; y: number }>) => {
      const { id, ...payload } = action.payload;
      const path = getPathFromComposedId(id);
      const popup = _.get(state.popups, path);

      popup.x += payload.x;
      popup.y += payload.y;
      _.set(state.popups, path, popup);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      const path = getPathFromComposedId(action.payload);

      _.unset(state.popups, path);
    },
  },
});

export const { addPopup, changePopupPosition, removePopup } = popupsSlice.actions;

export default popupsSlice.reducer;
