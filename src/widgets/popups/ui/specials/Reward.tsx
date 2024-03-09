import { useDispatch, useSelector } from 'react-redux';

import BASIC_POPUPS from '~/entities/constant/popup';
import { Button } from '~/shared/components/ui/button';
import { fitBlocksIntoContainer, selectBlocksByBelong } from '~/widgets/blocks/store';
import { changeCurrentScreen } from '~/widgets/screen/store/screen.slice';

import { removePopup } from '../../store/popups.slice';
import { PopupWithGrid } from '../containers/PopupWithGrid';

interface RewardProps {
  id: string;
}

export const Reward = ({ id }: RewardProps) => {
  const blocks = useSelector(selectBlocksByBelong(id));
  const dispatch = useDispatch();

  const onLeave = () => {
    dispatch(changeCurrentScreen('map'));
    dispatch(removePopup(id));
  };

  const onPutAllInInventory = () => {
    dispatch(
      fitBlocksIntoContainer({
        blocks: Object.values(blocks),
        container_id: BASIC_POPUPS.Inventory.container_id,
        sizes: BASIC_POPUPS.Inventory,
      })
    );
  };

  return (
    <PopupWithGrid id={id} unskippable>
      <div className="mt-4 flex w-full flex-col gap-2">
        <Button onClick={onPutAllInInventory} variant="outline">
          Put all in inventory
        </Button>
        <Button onClick={onLeave} variant="destructive">
          Leave
        </Button>
      </div>
    </PopupWithGrid>
  );
};
