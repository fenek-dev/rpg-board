import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import BASIC_POPUPS from '~/entities/constant/popup';
import { changeBlockPosition, putBlockInsideContainer, putBlocksTogether } from '~/widgets/blocks/store';
import { gainMoney, spendMoney } from '~/widgets/player/store';
import { addPopup, removePopup } from '~/widgets/popups/store/popups.slice';

import { RootState } from '../store';

export const shopMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<unknown>;

  const sell = (cost: number) => {
    next(action);
    next(gainMoney(cost));
  };

  const buy = (cost: number) => {
    const money = storeApi.getState().player.money;
    next(spendMoney(cost));
    if (cost <= money) {
      next(action);
    }
  };

  // On block position change
  if (action.type === changeBlockPosition.type) {
    const a = action as ReturnType<typeof changeBlockPosition>;
    const block = get(storeApi.getState().blocks.blocks, a.payload.id);
    const cost = block.amount * block.cost;

    // SELL
    if (block && a.payload.belong === BASIC_POPUPS.Shop.container_id && a.payload.belong !== block.belong) {
      if (block.type === 'container') {
        next(removePopup(block.id));
      }
      return sell(cost);
    }
    // BUY
    else if (
      block &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      a.payload.belong !== BASIC_POPUPS.Shop.container_id
    ) {
      return buy(cost);
    }
  }

  // On put together
  if (action.type === putBlocksTogether.type) {
    const a = action as ReturnType<typeof putBlocksTogether>;

    const from = get(storeApi.getState().blocks.blocks, a.payload.from);
    const to = get(storeApi.getState().blocks.blocks, a.payload.to);
    const cost = from.amount * from.cost;

    // SELL
    if (from && to && to.belong === BASIC_POPUPS.Shop.container_id && to.belong !== from.belong) {
      if (from.type === 'container') {
        next(removePopup(from.id));
      }
      return sell(cost);
    }
    // BUY
    else if (from && from.belong === BASIC_POPUPS.Shop.container_id && to.belong !== BASIC_POPUPS.Shop.container_id) {
      return buy(cost);
    }
  }

  // On put inside container
  if (action.type === putBlockInsideContainer.type) {
    const a = action as ReturnType<typeof putBlockInsideContainer>;
    const container = a.payload.container;
    const block = get(storeApi.getState().blocks.blocks, a.payload.block_id);

    const cost = block.amount * block.cost;

    // SELL
    if (container.belong === BASIC_POPUPS.Shop.container_id) {
      return;
    }
    // BUY
    else if (
      block &&
      container &&
      block.belong === BASIC_POPUPS.Shop.container_id &&
      container.belong !== BASIC_POPUPS.Shop.container_id
    ) {
      return buy(cost);
    }
  }

  // On popup open
  if (action.type === addPopup.type) {
    const a = action as ReturnType<typeof addPopup>;

    const block = get(storeApi.getState().blocks.blocks, a.payload.container_id);

    if (block.belong === BASIC_POPUPS.Shop.container_id) return;
  }

  next(action);
};
