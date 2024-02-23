import React from 'react';
import { useSelector } from 'react-redux';

import { MONEY } from '~/entities/items/money';
import { selectMoneyAmountInInventory, selectWeightInContainer } from '~/widgets/blocks/store';

import { PopupWithGrid } from '../containers/PopupWithGrid';

export const Inventory = React.memo(({ id }: { id: string }) => {
  const money_amount = useSelector(selectMoneyAmountInInventory);
  const weight = useSelector(selectWeightInContainer(id));

  return (
    <PopupWithGrid id={id}>
      <p className="leading-0 translate-y-1/2 text-sm text-muted-foreground">
        Coins: {money_amount} {MONEY.SilverCoin.icon}
      </p>
      <p className="leading-0 translate-y-1/2 text-sm text-muted-foreground">Weight: {weight}</p>
    </PopupWithGrid>
  );
});
