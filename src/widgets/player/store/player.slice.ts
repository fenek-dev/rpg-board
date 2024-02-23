import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

import { START_MAX_HP, START_MAX_MANA } from './player.enum';

export interface PlayerState {
  hp: number;
  mana: number;
  max_hp: number;
  max_mana: number;
  money: number;
}

const initialState: PlayerState = {
  hp: 10,
  mana: 10,
  max_hp: START_MAX_HP,
  max_mana: START_MAX_MANA,
  money: 10,
};

export const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    gainMoney: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
      toast.success(`You gained ${action.payload} coins`, {
        icon: '🪙',
      });
    },
    heal: (state, action: PayloadAction<number>) => {
      state.hp += action.payload;
      if (state.hp > state.max_hp) state.hp = state.max_hp;
      toast.success(`You healed ${action.payload} hp`, {
        icon: '❤️‍🩹',
      });
    },
    restoreMana: (state, action: PayloadAction<number>) => {
      state.mana += action.payload;
      if (state.mana > state.max_mana) state.mana = state.max_mana;
      toast.success(`You restored ${action.payload} mana`, {
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

export const { gainMoney, heal, restoreMana, spendMoney } = playerSlice.actions;

export default playerSlice.reducer;
