import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';

import { CombatBelongs } from './combat.types';

export const selectCombatEntitiesByBelongs = (belongs: CombatBelongs) =>
  createSelector(
    (state: RootState) => state.combat.entities,
    (entities) => entities.filter((entity) => entity.belong === belongs)
  );
