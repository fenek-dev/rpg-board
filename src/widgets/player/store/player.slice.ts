import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

import { loadState, resetState } from '~/app/store/actions';
import { Stats } from '~/entities/extendable/entity';

export interface PlayerState {
  exp: number;
  money: number;
  stats: Stats;
}

const initialState: PlayerState = {
  exp: 0,
  money: 10,
  stats: {
    action_amount: 1,
    attack: 100,
    crit_chance: 5,
    crit_dmg: 150,
    defense: 100,
    elemental_dmg_bonuses: {
      fire: 0,
      ice: 0,
      lightning: 0,
      physical: 0,
      water: 0,
      wind: 0,
    },
    energy: 6,
    energy_regen: 100,
    healing_bonus: 0,
    hp: 100,
    max_energy: 80,
    max_hp: 100,
    reaction_bonus: 0,
    resistances: {
      fire: 0,
      ice: 0,
      lightning: 0,
      physical: 0,
      water: 0,
      wind: 0,
    },
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
    heal: (state, action: PayloadAction<number>) => {
      state.stats.hp += action.payload;
      if (state.stats.hp > state.stats.max_hp) state.stats.hp = state.stats.max_hp;

      toast.success(`You healed ${action.payload} hp`, {
        icon: '❤️‍🩹',
      });
    },
    restoreEnergy: (state, action: PayloadAction<number>) => {
      state.stats.energy += action.payload;
      if (state.stats.energy > state.stats.max_energy) state.stats.energy = state.stats.max_energy;
      toast.success(`You restored ${action.payload} energy`, {
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
