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
