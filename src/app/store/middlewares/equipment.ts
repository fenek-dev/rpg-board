import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { unequipBlock } from '~/widgets/blocks/store';
import { equipItem } from '~/widgets/equipment/store/equipment.slice';

import { RootState } from '../store';

export const equipmentMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction;
  if ('type' in action && action.type === equipItem.type) {
    const a = action as unknown as PayloadAction<ReturnType<typeof equipItem>['payload']>;

    const item = get(storeApi.getState().equipment, a.payload.name);

    if (item) {
      next(unequipBlock(item));
    }
  }
  next(action);
};
