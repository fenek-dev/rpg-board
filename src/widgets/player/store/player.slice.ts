import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

import { Dice } from '~/entities/extendable/dices';
import { minMax } from '~/shared/utils/random';

import { START_MAX_HP, START_MAX_MANA } from './player.enum';

export interface PlayerState {
  hp: number;
  mana: number;
  max_hp: number;
  max_mana: number;
  money: number;
}

const initialState: PlayerState = {
  hp: 6,
  mana: 6,
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
    heal: (state, action: PayloadAction<Dice[]>) => {
      let total = 0;
      action.payload.forEach((d) => {
        const amount = minMax(d.min, d.max);
        total += amount;
        state.hp += amount;
        if (state.hp > state.max_hp) state.hp = state.max_hp;
      });
      toast.success(`You healed ${total} hp`, {
        icon: '❤️‍🩹',
      });
    },
    restoreMana: (state, action: PayloadAction<Dice[]>) => {
      let total = 0;
      action.payload.forEach((d) => {
        const amount = minMax(d.min, d.max);
        total += amount;
        state.mana += amount;
        if (state.mana > state.max_mana) state.mana = state.max_mana;
      });
      toast.success(`You restored ${total} mana`, {
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
