import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash-es';

import { Attack } from '~/entities/extendable/attacks';
import { calculateDamage } from '~/shared/utils/damage';
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
    const a = action as unknown as PayloadAction<{ attack: string; attacker: string; enemy: string }>;

    const attack = get(storeApi.getState().combat.attacks, a.payload.attack);
    const enemy = get(storeApi.getState().combat.entities, a.payload.enemy);
    const attacker = get(storeApi.getState().combat.entities, a.payload.attacker);

    const amount = calculateDamage(attack, enemy, attacker);
    console.log(amount);

    next(
      dealDamageToEnemy({
        amount,
        enemy: a.payload.enemy,
      })
    );
  }
  next(action);
};
