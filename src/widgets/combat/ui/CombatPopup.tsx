import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { CombatBelongs } from '../store/combat.types';
import { AttackPanel } from './AttackPanel';
import { CombatField } from './CombatField';

export const CombatPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Combat.container_id}>
      <div>
        <div className="flex gap-4">
          <CombatField belongs={CombatBelongs.PLAYER} />
          <CombatField belongs={CombatBelongs.ENEMY} />
        </div>
        <AttackPanel />
      </div>
    </SimpleDraggablePopup>
  );
};
