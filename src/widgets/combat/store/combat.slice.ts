import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';

import { CombatBelongs, CombatEntity } from './combat.types';

export interface CombatState {
  attacks: Attack[];
  entities: CombatEntity[];
  fieldSizes: {
    h: number;
    w: number;
  };
  player: {
    x: number;
    y: number;
  };
  started: boolean;
}

const initialState: CombatState = {
  attacks: [],
  entities: [
    {
      belong: CombatBelongs.ENEMY,
      ...ENEMIES.troll,
      x: 4,
      y: 2,
    },
  ],
  fieldSizes: {
    h: 11,
    w: 11,
  },
  player: {
    x: 5,
    y: 9,
  },
  started: false,
};

export const combatSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.combat;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'combat',
  reducers: {
    addAttacks: (state, action: PayloadAction<Attack[]>) => {
      state.attacks = action.payload;
    },
    endCombat: (state) => {
      state.started = false;
    },
    movePlayer: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.player = action.payload;
    },
    startCombat: (state) => {
      state.started = true;
    },
  },
});

export const { addAttacks, endCombat, movePlayer, startCombat } = combatSlice.actions;

export default combatSlice.reducer;
