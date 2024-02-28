import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { PopupWithGrid } from '../containers/PopupWithGrid';

export const Inventory = React.memo(({ id }: { id: string }) => {
  const money_amount = useSelector((state: RootState) => state.player.money);

  return (
    <PopupWithGrid id={id}>
      <div className="leading-0 flex translate-y-1/2 select-none justify-between text-sm text-muted-foreground">
        <span>Coins: {money_amount} 🪙</span>
      </div>
    </PopupWithGrid>
  );
});
