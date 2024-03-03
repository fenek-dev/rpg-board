import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';
import { EntityBelongs } from '~/entities/extendable/entity';

export const selectEntitiesByBelongs = createSelector(
  (state: RootState) => state.combat.entities,
  (entities) => {
    const friendly = Object.fromEntries(
      Object.entries(entities).filter(([, entity]) => entity.belongs === EntityBelongs.FRIENDLY)
    );
    const enemies = Object.fromEntries(
      Object.entries(entities).filter(([, entity]) => entity.belongs === EntityBelongs.ENEMY)
    );

    return {
      enemies,
      friendly,
    };
  }
);

export const selectCurrentEntity = createSelector(
  (state: RootState) => state.combat,
  ({ current, entities }) => {
    return { entity: entities[current], id: current };
  }
);

export const selectQueue = createSelector(
  (state: RootState) => state.combat,
  ({ entities, queue }) => {
    return Object.fromEntries(queue.map((id) => [id, entities[id]]));
  }
);

export const selectCurrentEntityAttacks = createSelector(
  (state: RootState) => state.combat,
  ({ current, entities }) => {
    return entities[current].attacks;
  }
);
export const selectCurrentEntityAttacksWithCooldown = createSelector(
  selectCurrentEntity,
  (state: RootState) => state.combat.cooldown,
  ({ entity, id }, cooldown) => {
    const cooldown_attacks = Object.fromEntries(Object.entries(cooldown).filter(([key]) => key.startsWith(id + '/')));

    const attacks = entity.attacks.map((attack, i) => {
      const path = `${id}/${i}`;

      return { attack, cooldown: cooldown_attacks[path] ?? 0 };
    });

    return attacks;
  }
);

export const selectIsCurrentEntityFriendly = createSelector(
  selectCurrentEntity,
  ({ entity }) => entity.belongs === EntityBelongs.FRIENDLY
);

export const selectCombatStatus = createSelector(
  (state: RootState) => state.combat,
  ({ entities }) => {
    if (Object.values(entities).filter((entity) => entity.belongs === EntityBelongs.ENEMY).length === 0) return 'win';
    else if (Object.values(entities).filter((entity) => entity.belongs === EntityBelongs.FRIENDLY).length === 0)
      return 'lost';
    else return 'in_process';
  }
);
