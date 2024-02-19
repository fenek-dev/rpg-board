import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { START_MAX_HP, START_MAX_MANA } from './player.enum';

export interface PlayerState {
  hp: number;
  mana: number;
  max_hp: number;
  max_mana: number;
}

const initialState: PlayerState = {
  hp: 10,
  mana: 10,
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
    restoreMana: (state, action: PayloadAction<number>) => {
      state.mana += action.payload;
      if (state.mana > state.max_mana) state.mana = state.max_mana;
    },
  },
});

export const { heal, restoreMana } = playerSlice.actions;

export default playerSlice.reducer;
