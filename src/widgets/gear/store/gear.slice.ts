import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';

export interface GearState {
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

const initialState: GearState = {
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

export const gearSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.gear;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'gear',
  reducers: {
    equipGear: (state, action: PayloadAction<{ id: string; name: keyof GearState }>) => {
      const { id, name } = action.payload;
      state[name] = id;
    },
    unequipGear: (state, action: PayloadAction<keyof GearState>) => {
      state[action.payload] = undefined;
    },
  },
});

export const { equipGear, unequipGear } = gearSlice.actions;

export default gearSlice.reducer;
