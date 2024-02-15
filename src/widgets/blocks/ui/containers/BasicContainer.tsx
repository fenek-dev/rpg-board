import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '~/entities/extendable/containers';
import { Badge } from '~/shared/components/ui/badge';
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
          closable: container.popup.closable,
          container_id: container.id,
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
        <span className="absolute bottom-1 right-1">
          <OpenInNewWindowIcon className="h-3 w-3" />
        </span>
      </Button>
    );
  })
);

BasicContainer.displayName = 'BasicContainer';
