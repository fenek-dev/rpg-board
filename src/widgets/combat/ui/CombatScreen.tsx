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

  const current = useSelector((state: RootState) => state.combat.current);
  const { entity } = useSelector(selectCurrentEntity);

  useEffect(() => {
    if (entity.belongs !== EntityBelongs.FRIENDLY) {
      entity.nextAttacks?.forEach((next) => {
        const attack_index = entity.attacks.findIndex((attack) => attack.id === next.id);
        dispatch(
          castAttack({
            attack: String(attack_index),
            enemy: 'player',
          })
        );
      });
    }
  }, [current]);

  return (
    <div className="h-full w-full p-14 pb-24">
      <CombatField />
      <CombatFooter />
    </div>
  );
};
