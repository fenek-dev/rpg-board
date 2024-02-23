import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { selectWeightInContainer } from '~/widgets/blocks/store';

import { PopupWithGrid } from '../containers/PopupWithGrid';

export const Inventory = React.memo(({ id }: { id: string }) => {
  const money_amount = useSelector((state: RootState) => state.player.money);
  const weight = useSelector(selectWeightInContainer(id));

  return (
    <PopupWithGrid id={id}>
      <p className="leading-0 translate-y-1/2 text-sm text-muted-foreground">Coins: {money_amount} 🪙</p>
      <p className="leading-0 translate-y-1/2 text-sm text-muted-foreground">Weight: {weight}</p>
    </PopupWithGrid>
  );
});
