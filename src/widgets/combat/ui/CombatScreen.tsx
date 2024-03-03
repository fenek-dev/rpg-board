import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { EntityBelongs } from '~/entities/extendable/entity';

import { selectCurrentEntity } from '../store/combat.selectors';
import { castAttack } from '../store/combat.slice';
import { CombatField } from './CombatField';
import { CombatFooter } from './Parts/CombatFooter';

export const CombatScreen = () => {
  const dispatch = useDispatch();

  const turn = useSelector((state: RootState) => state.combat.turn);
  const { entity } = useSelector(selectCurrentEntity);

  useEffect(() => {
    if (entity.belongs !== EntityBelongs.FRIENDLY) {
      if (entity.nextAttack) {
        const attack_index = entity.attacks.findIndex((attack) => attack.id === entity.nextAttack!.id);
        dispatch(
          castAttack({
            attack: String(attack_index),
            enemy: 'player',
          })
        );
      }
    }
  }, [turn]);

  return (
    <div className="h-full w-full p-14 pb-24">
      <CombatField />
      <CombatFooter />
    </div>
  );
};
