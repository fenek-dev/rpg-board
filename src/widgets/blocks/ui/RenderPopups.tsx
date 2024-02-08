import _ from 'lodash';
import React from 'react';

import { usePopups } from '~/app/contexts/Popups.context';

import { ContainerPopup } from './ContainerPopup';

export const RenderPopups = () => {
  const { popups } = usePopups();

  return (
    <div className="h-full w-full">
      {_.values(popups).map((popup) => (
        <ContainerPopup id={popup.block_id} key={popup.block_id} popup={popup} />
      ))}
    </div>
  );
};
