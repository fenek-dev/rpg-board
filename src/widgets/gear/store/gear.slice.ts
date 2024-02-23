import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  ring2: Block | null;
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
  ring2: null,
};

export const gearSlice = createSlice({
  initialState,
  name: 'gear',
  reducers: {
    equipGear: (state, action: PayloadAction<Block & { key: keyof GearState }>) => {
      const { key, ...block } = action.payload;
      state[key] = block as Block;
    },
  },
});

export const { equipGear } = gearSlice.actions;

export default gearSlice.reducer;
