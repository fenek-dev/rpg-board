import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { EntityBelongs } from '~/entities/extendable/entity';
import { fitBlocksIntoContainer } from '~/widgets/blocks/store';
import { selectCurrentTerrain } from '~/widgets/map/store/map.selectors';
import { addPopup } from '~/widgets/popups/store/popups.slice';

import { selectCombatStatus, selectCurrentEntity } from '../store/combat.selectors';
import { castAttack, endCombat } from '../store/combat.slice';
import { generateLoot } from '../utils/loot';
import { CombatField } from './CombatField';
import { CombatFooter } from './Parts/CombatFooter';

export const CombatScreen = () => {
  const dispatch = useDispatch();

  const current = useSelector((state: RootState) => state.combat.current);
  const type = useSelector((state: RootState) => state.combat.type);
  const stage = useSelector((state: RootState) => state.map.stage);
  const room = useSelector(selectCurrentTerrain);
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
    if (combat_status === 'win') {
      dispatch(endCombat());
      dispatch(
        addPopup({
          ...BASIC_POPUPS.Reward,
          x: window.innerWidth / 2 - 100,
          y: window.innerHeight / 2 - 100,
        })
      );
      dispatch(
        fitBlocksIntoContainer({
          blocks: generateLoot(stage, BASIC_POPUPS.Reward.container_id, type, room.cell!.seed),
          container_id: BASIC_POPUPS.Reward.container_id,
          sizes: BASIC_POPUPS.Reward,
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
