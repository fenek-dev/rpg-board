import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

export const CombatPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Combat.container_id}>
      <div className="h-96 w-[48rem]"></div>
    </SimpleDraggablePopup>
  );
};
