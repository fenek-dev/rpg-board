import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GearState {
  arms: string | undefined;
  artefact: string | undefined;
  chest: string | undefined;
  foot: string | undefined;
  head: string | undefined;
  melee: string | undefined;
  necklace: string | undefined;
  range: string | undefined;
  ring: string | undefined;
  ring2: string | undefined;
}

const initialState: GearState = {
  arms: undefined,
  artefact: undefined,
  chest: undefined,
  foot: undefined,
  head: undefined,
  melee: undefined,
  necklace: undefined,
  range: undefined,
  ring: undefined,
  ring2: undefined,
};

export const gearSlice = createSlice({
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
