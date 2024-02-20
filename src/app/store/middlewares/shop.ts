import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { changeBlockPosition, effectBlock, sellItem } from '~/widgets/blocks/store';

import { RootState } from '../store';

export const shopMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<unknown>;

  if (action.type === changeBlockPosition.type) {
    const a = action as ReturnType<typeof changeBlockPosition>;
    const block = get(storeApi.getState().blocks.blocks, a.payload.id);

    // SELL
    if (block && a.payload.belong === BASIC_POPUPS.Shop.container_id && a.payload.belong !== block.belong) {
      next(sellItem({ id: a.payload.id }));
    }
    // BUY
    if (
      block &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      a.payload.belong !== BASIC_POPUPS.Shop.container_id
    ) {
    }
  } else {
    next(action);
  }
};
