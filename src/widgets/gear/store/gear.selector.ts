import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';

import { GearState } from './gear.slice';

export const selectGear = (name: keyof GearState) =>
  createSelector(
    (state: RootState) => state.gear,
    (gear) => gear[name]
  );
