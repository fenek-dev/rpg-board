import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { get, set } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';
import { Entity } from '~/entities/extendable/entity';

export interface CombatState {
  attacks: Record<string, Attack>;
  entities: Entity[];
  started: boolean;
}

const initialState: CombatState = {
  attacks: {},
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
      action.payload.forEach((attack) => {
        state.attacks[attack.id] = attack;
      });
    },
    castAttack: (state, action: PayloadAction<Attack>) => {
      const attack = get(state.attacks, action.payload.id);

      // set recharge

      set(state.attacks, action.payload.id, attack);
    },
    endCombat: (state) => {
      state.started = false;
    },
    startCombat: (state) => {
      state.started = true;
    },
  },
});

export const { addAttacks, castAttack, endCombat, startCombat } = combatSlice.actions;

export default combatSlice.reducer;
