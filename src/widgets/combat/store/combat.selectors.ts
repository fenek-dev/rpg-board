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
  ({ entities, queue, turn }) => {
    const id = queue[turn % queue.length];
    return { entity: entities[id], id };
  }
);

export const selectCurrentEntityId = createSelector(
  (state: RootState) => state.combat,
  ({ queue, turn }) => {
    return queue[turn % queue.length];
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
  ({ entities, queue, turn }) => {
    const id = queue[turn % queue.length];
    return entities[id].attacks;
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
