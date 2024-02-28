import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { AttackPanel } from './AttackPanel';

export const CombatPopup = () => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Combat.container_id}>
      <div>
        <div className="flex gap-4">
          <div className="relative h-48 w-64 rounded-md border border-input">
            <Grid />
          </div>
          <div className="relative h-48 w-64 rounded-md border border-input">
            <Grid />
          </div>
        </div>
        <AttackPanel />
      </div>
    </SimpleDraggablePopup>
  );
};
