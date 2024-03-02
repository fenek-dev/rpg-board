import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { AttackPanel } from './AttackPanel';
import { CombatField } from './CombatField';

export const CombatScreen = () => {
  return (
    <div className="h-full w-full p-14 pb-24">
      <CombatField />
      <AttackPanel />
    </div>
  );
};
