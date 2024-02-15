import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '~/entities/extendable/containers';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { addPopup } from '~/widgets/popups/store/popups.slice';

interface BasicContainerProps extends ButtonProps {
  container: Container;
}

export const BasicContainer = React.memo(
  React.forwardRef<HTMLButtonElement, BasicContainerProps>(({ container, ...props }, ref) => {
    const dispatch = useDispatch();

    const handleOpenContainer = () => {
      dispatch(
        addPopup({
          block_id: container.id,
          h: container.popup.h,
          name: container.name,
          w: container.popup.w,
          x: 0,
          y: 0,
        })
      );
    };

    return (
      <Button onClick={handleOpenContainer} variant="outline" {...props} ref={ref}>
        {container.icon}
      </Button>
    );
  })
);

BasicContainer.displayName = 'BasicContainer';