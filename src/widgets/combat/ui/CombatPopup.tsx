import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { AttackPanel } from './AttackPanel';
import { CombatField } from './CombatField';

export const CombatPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Combat.container_id}>
      <div className="grid max-w-[28rem] grid-cols-1">
        <CombatField />
        <AttackPanel />
      </div>
    </SimpleDraggablePopup>
  );
};
