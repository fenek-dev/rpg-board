import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { get, set, shuffle, unset } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import { ENEMIES } from '~/entities/combat/enemies';
import { Attack } from '~/entities/extendable/attacks';
import { EntityBelongs } from '~/entities/extendable/entity';
import { PlayerState } from '~/widgets/player/store';

import { CombatEntity } from './combat.types';

export interface CombatState {
  cooldown: Record<string, number>;
  entities: Record<string, CombatEntity>;
  queue: string[];
  started: boolean;
  turn: number;
}

const initialState: CombatState = {
  cooldown: {},
  entities: {
    sdf: { ...ENEMIES.dragon, belongs: EntityBelongs.ENEMY },
    sgsd: { ...ENEMIES.orc, belongs: EntityBelongs.ENEMY },
    ws: { ...ENEMIES.goblin, belongs: EntityBelongs.ENEMY },
  },
  queue: [],
  started: false,
  turn: 0,
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
    // TODO: Add more playable characters
    addPlayers: (state, action: PayloadAction<{ attacks: Attack[]; player: PlayerState }>) => {
      const { attacks, player } = action.payload;
      state.entities.player = {
        attacks,
        belongs: EntityBelongs.FRIENDLY,
        ...player,
        icon: '🧙‍♂️',
        id: 'player',
        name: 'Player',
      };
      combatSlice.caseReducers.formQueue(state);
    },
    castAttack: (state, action: PayloadAction<{ attack: string; enemy: string }>) => {
      const attacker_id = state.queue[state.turn % state.queue.length];
      const attacker = get(state.entities, attacker_id);
      const attack = get(attacker.attacks, action.payload.attack);

      const path = `${attacker_id}/${action.payload.attack}`;

      state.cooldown[path] = attack.cooldown;
      // set recharge
    },
    dealDamageToEnemy: (state, action: PayloadAction<{ amount: number; enemy: string }>) => {
      const enemy = get(state.entities, action.payload.enemy);

      enemy.stats.hp -= action.payload.amount;

      if (enemy.stats.hp <= 0) {
        unset(state.entities, action.payload.enemy);
        state.queue = state.queue.filter((id) => id !== action.payload.enemy);
      } else {
        set(state.entities, action.payload.enemy, enemy);
      }
    },
    endCombat: (state) => {
      state.started = false;
    },
    formQueue: (state) => {
      const entityKeys = Object.keys(state.entities);
      const friendlyEntityKeys = entityKeys.filter((key) => state.entities[key].belongs === EntityBelongs.FRIENDLY);
      const enemyEntityKeys = entityKeys.filter((key) => state.entities[key].belongs === EntityBelongs.ENEMY);

      const randomFriendlyIndex = Math.floor(Math.random() * friendlyEntityKeys.length);
      const friendlyEntity = friendlyEntityKeys[randomFriendlyIndex];
      const restFriendlies = friendlyEntityKeys.filter((_, i) => i !== randomFriendlyIndex);
      const enemyEntityKeysShuffled = shuffle(enemyEntityKeys.concat(restFriendlies));
      const queue = [friendlyEntity, ...enemyEntityKeysShuffled];

      state.queue = queue;
    },
    nextTurn: (state) => {
      state.turn += 1;
      const entity = state.queue[state.turn % state.queue.length];

      Object.entries(state.cooldown).forEach(([key, value]) => {
        if (key.startsWith(entity + '/')) {
          state.cooldown[key] = value - 1;
        }
      });
    },
    startCombat: (state) => {
      state.started = true;
    },
  },
});

export const { addPlayers, castAttack, dealDamageToEnemy, endCombat, formQueue, nextTurn, startCombat } =
  combatSlice.actions;

export default combatSlice.reducer;
