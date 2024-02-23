import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { changeBlockPosition, putBlocksTogether } from '~/widgets/blocks/store';
import { gainMoney, spendMoney } from '~/widgets/player/store';

import { RootState } from '../store';

export const shopMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<unknown>;

  const sell = (cost: number) => {
    next(action);
    next(gainMoney(cost));
    return;
  };

  const buy = (cost: number) => {
    const money = storeApi.getState().player.money;
    next(spendMoney(cost));
    if (cost <= money) {
      next(action);
    }
    return;
  };

  if (action.type === changeBlockPosition.type) {
    const a = action as ReturnType<typeof changeBlockPosition>;
    const block = get(storeApi.getState().blocks.blocks, a.payload.id);
    const cost = block.amount * block.cost;

    // SELL
    if (block && a.payload.belong === BASIC_POPUPS.Shop.container_id && a.payload.belong !== block.belong) {
      sell(cost);
    }
    // BUY
    else if (
      block &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      a.payload.belong !== BASIC_POPUPS.Shop.container_id
    ) {
      buy(cost);
    }
  }
  if (action.type === putBlocksTogether.type) {
    const a = action as ReturnType<typeof putBlocksTogether>;

    const from = get(storeApi.getState().blocks.blocks, a.payload.from);
    const to = get(storeApi.getState().blocks.blocks, a.payload.to);
    const cost = from.amount * from.cost;

    // SELL
    if (from && to && to.belong === BASIC_POPUPS.Shop.container_id && to.belong !== from.belong) {
      sell(cost);
    }
    // BUY
    else if (from && from.belong === BASIC_POPUPS.Shop.container_id && to.belong !== BASIC_POPUPS.Shop.container_id) {
      buy(cost);
    }
  }
  next(action);
};
