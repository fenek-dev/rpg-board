import { Cross1Icon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';

import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/utils';

import { removePopup } from '../../store/popups.slice';
import { PopupData } from '../../store/popups.types';

interface PopupMenuProps {
  className?: string;
  id: string;
  onClose?: () => void;
  popup: PopupData;
}

export const PopupMenu = ({ className, id, onClose }: PopupMenuProps) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    if (onClose) onClose();
    dispatch(removePopup(id));
  };

  return (
    <div className={cn('flex flex-col gap-1 rounded-md border border-input bg-background bg-opacity-45', className)}>
      <Button onClick={onCloseHandler} size="icon" variant="ghost">
        <Cross1Icon />
      </Button>
    </div>
  );
};
