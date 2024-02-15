import React from 'react';

import { Item } from '~/entities/extendable/items';
import { Button, ButtonProps } from '~/shared/components/ui/button';

interface BasicItemProps extends ButtonProps {
  item: Item;
}

export const BasicItem = React.memo(
  React.forwardRef<HTMLButtonElement, BasicItemProps>((props, ref) => {
    return (
      <Button rarity={props.item.rarity} variant="outline" {...props} ref={ref}>
        {props.item.icon}
      </Button>
    );
  })
);

BasicItem.displayName = 'BasicItem';
