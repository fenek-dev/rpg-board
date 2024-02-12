import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { ContainerPopup } from './ContainerPopup';

export const RenderPopups = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);
  return _.entries(popups).map(([id, popup]) => <ContainerPopup id={id} key={id} popup={popup} />);
};
