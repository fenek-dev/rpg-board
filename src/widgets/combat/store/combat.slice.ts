import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { Attack } from '~/entities/extendable/attacks';

import { CombatEntity } from './combat.types';

export interface CombatState {
  attacks: Attack[];
  entities: CombatEntity[];
  fieldSizes: {
    h: number;
    w: number;
  };
  started: boolean;
}

const initialState: CombatState = {
  attacks: [],
  entities: [],
  fieldSizes: {
    h: 6,
    w: 10,
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
    startCombat: (state) => {
      state.started = true;
    },
  },
});

export const { addAttacks, endCombat, startCombat } = combatSlice.actions;

export default combatSlice.reducer;
