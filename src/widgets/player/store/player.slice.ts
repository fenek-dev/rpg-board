import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { START_HP, START_MANA, START_MAX_HP, START_MAX_MANA } from './player.enum';
import { ChangePlayerStat } from './player.types';

export interface PlayerState {
  hp: number;
  mana: number;
  max_hp: number;
  max_mana: number;
}

const initialState: PlayerState = {
  hp: 10,
  mana: START_MANA,
  max_hp: START_MAX_HP,
  max_mana: START_MAX_MANA,
};

export const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    heal: (state, action: PayloadAction<number>) => {
      state.hp += action.payload;
      if (state.hp > state.max_hp) state.hp = state.max_hp;
    },
  },
});

export const { heal } = playerSlice.actions;

export default playerSlice.reducer;
