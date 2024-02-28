import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';

export interface EquipmentState {
  additional: string | undefined;
  arms: string | undefined;
  artefact: string | undefined;
  chest: string | undefined;
  foot: string | undefined;
  gloves: string | undefined;
  head: string | undefined;
  necklace: string | undefined;
  ring: string | undefined;
  weapon: string | undefined;
}

const initialState: EquipmentState = {
  additional: undefined,
  arms: undefined,
  artefact: undefined,
  chest: undefined,
  foot: undefined,
  gloves: undefined,
  head: undefined,
  necklace: undefined,
  ring: undefined,
  weapon: undefined,
};

export const equipmentSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.equipment;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'equipment',
  reducers: {
    equipItem: (state, action: PayloadAction<{ id: string; name: keyof EquipmentState }>) => {
      const { id, name } = action.payload;
      state[name] = id;
    },
    unequipItem: (state, action: PayloadAction<keyof EquipmentState>) => {
      state[action.payload] = undefined;
    },
  },
});

export const { equipItem, unequipItem } = equipmentSlice.actions;

export default equipmentSlice.reducer;
