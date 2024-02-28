import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { random } from 'lodash-es';
import { toast } from 'sonner';

import { loadState, resetState } from '~/app/store/actions';
import { Dice } from '~/entities/extendable/dices';

import { LEVEL_PROGRESSION, START_MAX_ENERGY, START_MAX_HP } from './player.enum';

export interface PlayerState {
  exp: number;
  level: number;
  money: number;
  stats: {
    attack: number;
    crit_chance: number;
    crit_damage: number;
    defense: number;
    energy: number;
    energy_regen: number;
    hp: number;
    max_energy: number;
    max_hp: number;
  };
}

const initialState: PlayerState = {
  exp: 0,
  level: 1,
  money: 10,
  stats: {
    attack: 100,
    crit_chance: 5,
    crit_damage: 150,
    defense: 100,
    energy: 6,
    energy_regen: 100,
    hp: 6,
    max_energy: START_MAX_ENERGY,
    max_hp: START_MAX_HP,
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
    gainExp: (state, action: PayloadAction<number>) => {
      state.exp += action.payload;
      const nextLevel = LEVEL_PROGRESSION[state.level + 1];
      if (nextLevel && state.exp >= nextLevel) {
        state.exp -= nextLevel;
        state.level += 1;
      }
    },
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
