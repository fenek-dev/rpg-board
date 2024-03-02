import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { get, set } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import { ATTACKS } from '~/entities/combat/attacks';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';
import { Entity } from '~/entities/extendable/entity';

export interface CombatState {
  attacks: Record<string, Attack>;
  entities: Record<string, Entity>;
  started: boolean;
}

const initialState: CombatState = {
  attacks: {
    1: ATTACKS.BasicAttack,
  },
  entities: { goblin: ENEMIES.goblin },
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
    castAttackOnEnemy: (state, action: PayloadAction<{ attack: string; enemy: string }>) => {
      const attack = get(state.attacks, action.payload.attack);

      // set recharge

      set(state.attacks, action.payload.attack, attack);
    },
    castAttackOnSelf: (state, action: PayloadAction<string>) => {
      const attack = get(state.attacks, action.payload);

      // set recharge

      set(state.attacks, action.payload, attack);
    },
    dealDamageToEnemy: (state, action: PayloadAction<{ amount: number; enemy: string }>) => {
      const enemy = get(state.entities, action.payload.enemy);

      enemy.hp -= action.payload.amount;

      if (enemy.hp <= 0) {
        delete state.entities[action.payload.enemy];
      } else {
        set(state.entities, action.payload.enemy, enemy);
      }
    },
    endCombat: (state) => {
      state.started = false;
    },
    startCombat: (state) => {
      state.started = true;
    },
  },
});

export const { addAttacks, castAttackOnEnemy, castAttackOnSelf, dealDamageToEnemy, endCombat, startCombat } =
  combatSlice.actions;

export default combatSlice.reducer;
