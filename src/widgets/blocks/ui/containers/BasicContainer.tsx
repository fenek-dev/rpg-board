import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Button, ButtonProps } from '~/shared/components/ui/button';
import { addPopup } from '~/widgets/popups/store/popups.slice';
import { Popup } from '~/widgets/popups/store/popups.types';

interface BasicContainerProps extends ButtonProps {
  popup: Popup;
}

export const BasicContainer = React.memo(
  React.forwardRef<HTMLButtonElement, BasicContainerProps>((props, ref) => {
    const dispatch = useDispatch();

    const handleOpenContainer = () => {
      dispatch(addPopup(props.popup));
    };

    return <Button onClick={handleOpenContainer} variant="outline" {...props} ref={ref}></Button>;
  })
);

BasicContainer.displayName = 'BasicContainer';
