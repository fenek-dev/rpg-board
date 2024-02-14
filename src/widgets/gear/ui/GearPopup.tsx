import React from 'react';

import { Button } from '~/shared/components/ui/button';
import { DraggablePopup, DraggablePopupProps } from '~/widgets/popups/ui/DraggablePopup';

export const GearPopup = (props: DraggablePopupProps) => {
  return (
    <DraggablePopup {...props}>
      <Button variant="outline">necklace</Button>
      <Button variant="outline">head</Button>
      <Button variant="outline">artifact</Button>
      <Button variant="outline">melee</Button>
      <Button variant="outline">chest</Button>
      <Button variant="outline">range</Button>
    </DraggablePopup>
  );
};
