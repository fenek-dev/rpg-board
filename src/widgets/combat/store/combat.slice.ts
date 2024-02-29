import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';
import { Entity } from '~/entities/extendable/entity';

export interface CombatState {
  attacks: Attack[];
  entities: Entity[];
  started: boolean;
}

const initialState: CombatState = {
  attacks: [],
  entities: [ENEMIES.goblin, ENEMIES.goblin, ENEMIES.goblin, ENEMIES.goblin, ENEMIES.troll],
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
