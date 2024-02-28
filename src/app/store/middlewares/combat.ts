import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { Attack } from '~/entities/extendable/attacks';
import { addAttacks, startCombat } from '~/widgets/combat/store/combat.slice';

import { RootState } from '../store';

export const combatMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (ac) => {
  const action = ac as PayloadAction;
  if ('type' in action && action.type === startCombat.type) {
    const equipment = Object.values(storeApi.getState().equipment)
      .filter((e) => typeof e === 'string')
      .map((e: string) => get(storeApi.getState().blocks.blocks, e));

    let attacks: Attack[] = [];
    equipment.forEach((e) => {
      if (e.category === 'equipment' && 'attacks' in e && e.attacks) {
        attacks = attacks.concat(e.attacks);
      }
    });

    next(addAttacks(attacks));
  }
  next(action);
};
