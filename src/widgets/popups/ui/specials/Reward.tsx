import { useDispatch } from 'react-redux';

import { Button } from '~/shared/components/ui/button';
import { changeCurrentScreen } from '~/widgets/screen/store/screen.slice';

import { removePopup } from '../../store/popups.slice';
import { PopupWithGrid } from '../containers/PopupWithGrid';

interface RewardProps {
  id: string;
}

export const Reward = ({ id }: RewardProps) => {
  const dispatch = useDispatch();

  const onLeave = () => {
    dispatch(changeCurrentScreen('map'));
    dispatch(removePopup(id));
  };

  return (
    <PopupWithGrid id={id} unskippable>
      <div className="mt-4 flex w-full flex-col gap-2">
        <Button variant="outline">Put all in inventory</Button>
        <Button onClick={onLeave} variant="outline">
          Leave
        </Button>
      </div>
    </PopupWithGrid>
  );
};
