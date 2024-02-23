import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { changeBlockPosition } from '~/widgets/blocks/store';
import { gainMoney, spendMoney } from '~/widgets/player/store';

import { RootState } from '../store';

export const shopMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<unknown>;

  if (action.type === changeBlockPosition.type) {
    const a = action as ReturnType<typeof changeBlockPosition>;
    const block = get(storeApi.getState().blocks.blocks, a.payload.id);
    const money = storeApi.getState().player.money;
    const cost = block.amount * block.cost;

    // SELL
    if (block && a.payload.belong === BASIC_POPUPS.Shop.container_id && a.payload.belong !== block.belong) {
      next(action);
      next(gainMoney(cost));
      return;
    }
    // BUY
    else if (
      block &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      a.payload.belong !== BASIC_POPUPS.Shop.container_id
    ) {
      next(spendMoney(cost));
      if (cost <= money) {
        next(action);
      }
      return;
    }
  }
  next(action);
};
