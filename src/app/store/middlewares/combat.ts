import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { Attack } from '~/entities/extendable/attacks';
import { addAttacks, castAttack, dealDamageToEnemy, startCombat } from '~/widgets/combat/store/combat.slice';

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

  if ('type' in action && action.type === castAttack.type) {
    const a = action as unknown as PayloadAction<{ attack: string; enemy: string }>;

    // TODO: Damage calculation
    const amount = get(storeApi.getState().combat.attacks, a.payload.attack).damage_multiplier;

    next(
      dealDamageToEnemy({
        amount,
        enemy: a.payload.enemy,
      })
    );
  }
  next(action);
};
