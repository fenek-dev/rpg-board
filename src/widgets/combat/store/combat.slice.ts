import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { get, set } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import { ATTACKS } from '~/entities/combat/attacks';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';
import { EntityBelongs } from '~/entities/extendable/entity';

import { CombatEntity } from './combat.types';

export interface CombatState {
  attacks: Record<string, Attack>;
  entities: Record<string, CombatEntity>;
  started: boolean;
}

const initialState: CombatState = {
  attacks: {
    attack: ATTACKS.BasicAttack,
  },
  entities: {
    goblin: { ...ENEMIES.goblin, belongs: EntityBelongs.ENEMY },
    player: { ...ENEMIES.goblin, belongs: EntityBelongs.FRIENDLY },
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
      action.payload.forEach((attack) => {
        state.attacks[attack.id] = attack;
      });
    },
    castAttack: (state, action: PayloadAction<{ attack: string; enemy: string }>) => {
      const attack = get(state.attacks, action.payload.attack);

      // set recharge

      set(state.attacks, action.payload.attack, attack);
    },
    dealDamageToEnemy: (state, action: PayloadAction<{ amount: number; enemy: string }>) => {
      const enemy = get(state.entities, action.payload.enemy);

      enemy.stats.hp -= action.payload.amount;

      if (enemy.stats.hp <= 0) {
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

export const { addAttacks, castAttack, dealDamageToEnemy, endCombat, startCombat } = combatSlice.actions;

export default combatSlice.reducer;
