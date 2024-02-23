import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { EFFECTS } from '~/entities/items/effects';
import { effectBlock } from '~/widgets/blocks/store';
import { heal, restoreMana } from '~/widgets/player/store';

import { RootState } from '../store';

export const effectsMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction<{ id: string }>;
  if ('type' in action && action.type === effectBlock.type) {
    const block = get(storeApi.getState().blocks.blocks, action.payload.id);

    if (block?.type === 'item') {
      block.effects?.forEach((eff) => {
        switch (eff.id) {
          case EFFECTS.Heal.id:
            next(heal(eff.dices));
            break;
          case EFFECTS.RestoreMana.id:
            next(restoreMana(eff.dices));
            break;
          default:
            break;
        }
      });
    }
  }
  next(action);
};
