import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { random } from 'lodash-es';
import { toast } from 'sonner';

import { loadState, resetState } from '~/app/store/actions';
import { Dice } from '~/entities/extendable/dices';

import { START_MAX_ENERGY, START_MAX_HP } from './player.enum';

export interface PlayerState {
  energy: number;
  hp: number;
  max_energy: number;
  max_hp: number;
  money: number;
}

const initialState: PlayerState = {
  energy: 6,
  hp: 6,
  max_energy: START_MAX_ENERGY,
  max_hp: START_MAX_HP,
  money: 10,
};

export const playerSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.player;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'player',
  reducers: {
    gainMoney: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
      toast.success(`You gained ${action.payload} coins`, {
        icon: '🪙',
      });
    },
    heal: (state, action: PayloadAction<Dice[]>) => {
      let total = 0;
      action.payload.forEach((d) => {
        const amount = random(d.min, d.max);
        total += amount;
        state.hp += amount;
        if (state.hp > state.max_hp) state.hp = state.max_hp;
      });
      toast.success(`You healed ${total} hp`, {
        icon: '❤️‍🩹',
      });
    },
    restoreEnergy: (state, action: PayloadAction<Dice[]>) => {
      let total = 0;
      action.payload.forEach((d) => {
        const amount = random(d.min, d.max);
        total += amount;
        state.energy += amount;
        if (state.energy > state.max_energy) state.energy = state.max_energy;
      });
      toast.success(`You restored ${total} energy`, {
        icon: '🔹',
      });
    },
    spendMoney: (state, action: PayloadAction<number>) => {
      const left = state.money - action.payload;
      if (left < 0) {
        toast.error(`You don't have enough money`, {
          description: `You need ${Math.abs(left)} 🪙 more`,
          icon: '❌',
        });
      } else {
        state.money = left;
        toast.success(`You spent ${action.payload} coins`, {
          icon: '🪙',
        });
      }
    },
  },
});

export const { gainMoney, heal, restoreEnergy, spendMoney } = playerSlice.actions;

export default playerSlice.reducer;
