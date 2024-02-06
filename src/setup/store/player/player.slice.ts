import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ChangePlayerStat } from "./player.types";

export interface PlayerState {
  hp: number;
  max_hp: number;
  stamina: number;
  max_stamina: number;
  hunger: number;
  thirsty: number;
}

const initialState: PlayerState = {
  hp: 100,
  max_hp: 100,
  stamina: 100,
  max_stamina: 100,
  hunger: 100,
  thirsty: 100,
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
