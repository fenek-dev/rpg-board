import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { get, set, shuffle, unset } from 'lodash-es';

import { loadState, resetState } from '~/app/store/actions';
import { ATTACKS } from '~/entities/combat/attacks';
import { Attack } from '~/entities/extendable/attacks';
import { EntityBelongs } from '~/entities/extendable/entity';
import { Stages } from '~/entities/extendable/map';
import { PlayerState } from '~/widgets/player/store';

import { CombatEntity, CombatTypes } from './combat.types';
import { getEnemiesByStageAndType, getNextAttacks } from './combat.utils';

export interface CombatState {
  cooldown: Record<string, number>;
  current: string;
  entities: Record<string, CombatEntity>;
  queue: string[];
  started: boolean;
  type: CombatTypes;
}

const initialState: CombatState = {
  cooldown: {},
  current: '',
  entities: {},
  queue: [],
  started: false,
  type: 'combat',
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
      if (attacks.length === 0) {
        attacks.push(ATTACKS.Punch);
        attacks.push(ATTACKS.WindSlash);
      }
      state.entities.player = {
        attacks,
        belongs: EntityBelongs.FRIENDLY,
        ...player,
        actions_left: player.stats.action_amount,
        icon: '🧙‍♂️',
        id: 'player',
        name: 'Player',
      };
    },
    castAttack: (state, action: PayloadAction<{ attack: string; enemy: string }>) => {
      const attacker_id = state.current;
      const attacker = get(state.entities, attacker_id);
      const attack = get(attacker.attacks, action.payload.attack) as Attack;

      if (attack.action_cost > attacker.actions_left) return state;
      attacker.actions_left -= attack.action_cost;

      const path = `${attacker_id}/${action.payload.attack}`;

      state.cooldown[path] = attack.cooldown;

      if (attacker.belongs === EntityBelongs.ENEMY) {
        state.entities[attacker_id].nextAttacks = getNextAttacks(attacker);
      }
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
      state.current = friendlyEntity;

      state.queue = queue;
    },
    nextTurn: (state) => {
      const index = state.queue.indexOf(state.current);
      const id = state.queue[index];

      const entity = state.entities[id];
      Object.entries(state.cooldown).forEach(([key, value]) => {
        if (key.startsWith(id + '/')) {
          state.cooldown[key] = value - 1;
        }
      });
      entity.actions_left = entity.stats.action_amount;
      const next = state.queue[(index + 1) % state.queue.length];
      state.current = next;
    },
    startCombat: (state, action: PayloadAction<{ seed: number; stage: Stages; type: CombatTypes }>) => {
      state.started = true;
      state.cooldown = {};
      state.type = action.payload.type;
      getEnemiesByStageAndType(action.payload.stage, action.payload.type, action.payload.seed).forEach((enemy) => {
        const id = crypto.randomUUID();
        state.entities[id] = enemy;
      });

      Object.entries(state.entities).forEach(([key, entity]) => {
        if (entity.belongs === EntityBelongs.ENEMY) {
          state.entities[key].nextAttacks = getNextAttacks(entity);
        }
      });

      combatSlice.caseReducers.formQueue(state);
    },
  },
});

export const { addPlayers, castAttack, dealDamageToEnemy, endCombat, formQueue, nextTurn, startCombat } =
  combatSlice.actions;

export default combatSlice.reducer;
