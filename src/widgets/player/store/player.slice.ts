import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import {
  START_HP,
  START_HUNGER,
  START_MAX_HP,
  START_STAMINA,
} from './player.enum';
import { ChangePlayerStat } from './player.types';

export interface PlayerState {
  hp: number;
  hunger: number;
  max_hp: number;
  max_stamina: number;
  stamina: number;
  thirsty: number;
}

const initialState: PlayerState = {
  hp: START_HP,
  hunger: START_STAMINA,
  max_hp: START_MAX_HP,
  max_stamina: START_MAX_HP,
  stamina: START_STAMINA,
  thirsty: START_HUNGER,
};

export const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    increasePlayerStat: (state, action: PayloadAction<ChangePlayerStat>) => {
      state[action.payload.name] += action.payload.value;
    },
    reducePlayerStat: (state, action: PayloadAction<ChangePlayerStat>) => {
      state[action.payload.name] -= action.payload.value;
    },
  },
});

export const { increasePlayerStat, reducePlayerStat } = playerSlice.actions;

export default playerSlice.reducer;
