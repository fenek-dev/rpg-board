import { createSlice } from '@reduxjs/toolkit';

import { Block } from '~/widgets/blocks/store';

export interface GearState {
  arms: Block | null;
  artefact: Block | null;
  chest: Block | null;
  foot: Block | null;
  head: Block | null;
  melee: Block | null;
  necklace: Block | null;
  range: Block | null;
  ring: Block | null;
}

const initialState: GearState = {
  arms: null,
  artefact: null,
  chest: null,
  foot: null,
  head: null,
  melee: null,
  necklace: null,
  range: null,
  ring: null,
};

export const gearSlice = createSlice({
  initialState,
  name: 'gear',
  reducers: {},
});

export const {} = gearSlice.actions;

export default gearSlice.reducer;
