import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { RootState } from '~/app/store';

import { GearState } from './gear.slice';

export const selectGear = (name: keyof GearState) =>
  createSelector(
    (state: RootState) => state.gear,
    (state: RootState) => state.blocks.blocks,
    (gear, blocks) => {
      const id = gear[name];
      if (!id) return [null, null] as const;
      return [id, get(blocks, id)] as const;
    }
  );
