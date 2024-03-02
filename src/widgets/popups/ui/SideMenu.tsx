import { BackpackIcon, PersonIcon } from '@radix-ui/react-icons';
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

  const openStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addPopup({
        ...BASIC_POPUPS.Status,
        x: e.clientX + 30,
        y: e.clientY,
      })
    );
  };

  const openEquipment = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addPopup({
        ...BASIC_POPUPS.Equipment,
        x: e.clientX + 30,
        y: e.clientY,
      })
    );
  };

  return (
    <div className="fixed left-2 top-20 flex flex-col gap-2 rounded-md border border-input bg-background p-2">
      <Button onClick={openInventory} size="icon" title="Open inventory" variant="outline">
        <BackpackIcon />
      </Button>
      <Button onClick={openStatus} size="icon" variant="outline">
        <PersonIcon />
      </Button>
      <Button onClick={openEquipment} size="icon" variant="outline">
        🗡️
      </Button>
    </div>
  );
};
