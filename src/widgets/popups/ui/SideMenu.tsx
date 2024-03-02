import { BackpackIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useDispatch } from 'react-redux';

import BASIC_POPUPS from '~/entities/constant/popup';
import { Button } from '~/shared/components/ui/button';

import { addPopup } from '../store/popups.slice';

export const SideMenu = () => {
  const dispatch = useDispatch();
  const openInventory = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addPopup({
        ...BASIC_POPUPS.Inventory,
        x: e.clientX + 30,
        y: e.clientY,
      })
    );
  };

  return (
    <div className="fixed left-2 top-20 flex flex-col gap-4">
      <Button onClick={openInventory} size="icon" variant="outline">
        <BackpackIcon />
      </Button>
    </div>
  );
};
