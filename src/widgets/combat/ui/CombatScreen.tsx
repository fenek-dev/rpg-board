import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { EntityBelongs } from '~/entities/extendable/entity';
import { addPopup } from '~/widgets/popups/store/popups.slice';

import { selectCombatStatus, selectCurrentEntity } from '../store/combat.selectors';
import { castAttack, endCombat } from '../store/combat.slice';
import { CombatField } from './CombatField';
import { CombatFooter } from './Parts/CombatFooter';

export const CombatScreen = () => {
  const dispatch = useDispatch();

  const current = useSelector((state: RootState) => state.combat.current);
  const combat_status = useSelector(selectCombatStatus);
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

  useEffect(() => {
    console.log(combat_status);
    if (combat_status === 'win') {
      dispatch(endCombat());
      dispatch(
        addPopup({
          ...BASIC_POPUPS.Reward,
          x: window.innerWidth / 2 - 100,
          y: window.innerHeight / 2 - 100,
        })
      );
    }
    if (combat_status === 'lost') {
      dispatch(endCombat());
    }
  }, [combat_status]);

  return (
    <div className="h-full w-full p-14 pb-24">
      <CombatField />
      <CombatFooter />
    </div>
  );
};
