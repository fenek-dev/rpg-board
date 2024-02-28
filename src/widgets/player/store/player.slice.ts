import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { random } from 'lodash-es';
import { toast } from 'sonner';

import { loadState, resetState } from '~/app/store/actions';
import { Dice } from '~/entities/extendable/dices';

import { START_MAX_ENERGY, START_MAX_HP } from './player.enum';

export interface PlayerState {
  exp: number;
  money: number;
  stats: {
    attack: number;
    crit_chance: number;
    crit_dmg: number;
    defense: number;
    elemental_dmg_bonus: number;
    energy: number;
    energy_regen: number;
    healing_bonus: number;
    hp: number;
    max_energy: number;
    max_hp: number;
    physical_dmg_bonus: number;
    reaction_bonus: number;
  };
}

const initialState: PlayerState = {
  exp: 0,
  money: 10,
  stats: {
    attack: 100,
    crit_chance: 5,
    crit_dmg: 150,
    defense: 100,
    elemental_dmg_bonus: 0,
    energy: 6,
    energy_regen: 100,
    healing_bonus: 0,
    hp: 6,
    max_energy: START_MAX_ENERGY,
    max_hp: START_MAX_HP,
    physical_dmg_bonus: 0,
    reaction_bonus: 0,
  },
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
        state.stats.hp += amount;
        if (state.stats.hp > state.stats.max_hp) state.stats.hp = state.stats.max_hp;
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
        state.stats.energy += amount;
        if (state.stats.energy > state.stats.max_energy) state.stats.energy = state.stats.max_energy;
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
