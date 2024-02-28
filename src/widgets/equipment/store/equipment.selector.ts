import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { RootState } from '~/app/store';

import { EquipmentState } from './equipment.slice';

export const selectEquipment = (name: keyof EquipmentState) =>
  createSelector(
    (state: RootState) => state.equipment,
    (state: RootState) => state.blocks.blocks,
    (equipment, blocks) => {
      const id = equipment[name];
      if (!id) return [null, null] as const;
      return [id, get(blocks, id)] as const;
    }
  );
