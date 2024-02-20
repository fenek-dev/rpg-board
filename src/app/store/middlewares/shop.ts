import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { MONEY } from '~/entities/items/money';
import { buyItem, changeBlockPosition, sellItem } from '~/widgets/blocks/store';

import { RootState } from '../store';

export const shopMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<unknown>;

  if (action.type === changeBlockPosition.type) {
    const a = action as ReturnType<typeof changeBlockPosition>;
    const block = get(storeApi.getState().blocks.blocks, a.payload.id);

    if (block.id === MONEY.SilverCoin.id && a.payload.belong === BASIC_POPUPS.Shop.container_id) return;
    // SELL
    if (block && a.payload.belong === BASIC_POPUPS.Shop.container_id && a.payload.belong !== block.belong) {
      next(sellItem(a.payload));
    }
    // BUY
    else if (
      block &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      a.payload.belong !== BASIC_POPUPS.Shop.container_id
    ) {
      next(buyItem(a.payload));
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};
