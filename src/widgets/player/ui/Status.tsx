import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Progress } from '~/shared/components/ui/progress';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

export const Status = () => {
  const { hp, mana, max_hp, max_mana } = useSelector((state: RootState) => state.player);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Status.container_id}>
      <div className="w-96 space-y-2">
        <Progress
          indicatorClassName="bg-red-700"
          max={max_hp}
          style={{
            height: gridSize / 2.5,
          }}
          value={hp}
        >
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sm leading-none text-muted-foreground">
            {hp} / {max_hp}
          </span>
        </Progress>
        <Progress
          indicatorClassName="bg-blue-700"
          max={max_mana}
          style={{
            height: gridSize / 2.5,
          }}
          value={mana}
        >
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sm leading-none text-muted-foreground">
            {mana} / {max_mana}
          </span>
        </Progress>
      </div>
    </SimpleDraggablePopup>
  );
};
