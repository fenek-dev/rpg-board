import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ChangePlayerStat } from "./player.types";
import {
  START_HP,
  START_HUNGER,
  START_MAX_HP,
  START_STAMINA,
} from "./player.enum";

export interface PlayerState {
  hp: number;
  max_hp: number;
  stamina: number;
  max_stamina: number;
  hunger: number;
  thirsty: number;
}

const initialState: PlayerState = {
  hp: START_HP,
  max_hp: START_MAX_HP,
  stamina: START_STAMINA,
  max_stamina: START_MAX_HP,
  hunger: START_STAMINA,
  thirsty: START_HUNGER,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
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
