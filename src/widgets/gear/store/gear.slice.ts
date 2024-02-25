import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState } from '~/app/store/actions';

export interface GearState {
  arms: string | undefined;
  artefact: string | undefined;
  chest: string | undefined;
  foot: string | undefined;
  gloves: string | undefined;
  head: string | undefined;
  melee: string | undefined;
  necklace: string | undefined;
  range: string | undefined;
  ring: string | undefined;
}

const initialState: GearState = {
  arms: undefined,
  artefact: undefined,
  chest: undefined,
  foot: undefined,
  gloves: undefined,
  head: undefined,
  melee: undefined,
  necklace: undefined,
  range: undefined,
  ring: undefined,
};

export const gearSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(loadState, (state, action) => {
      state = action.payload.gear;
      return state;
    });
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
