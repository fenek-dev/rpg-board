import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Container } from '~/entities/extendable/containers';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { useGridItem } from '~/widgets/grid/hooks/useGridItem';
import { addPopup } from '~/widgets/popups/store/popups.slice';

import { Block } from '../../store';
import { Details } from '../common/Details';

export const BasicContainer = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const container = useSelector((state: RootState) => state.blocks.blocks[props.id!]) as Block<Container>;
    const dispatch = useDispatch();

    const { onDragEnd, onDragStart, style } = useGridItem(container, props.id!);

    const handleOpenContainer = (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(
        addPopup({
          closable: container.popup.closable,
          container_id: container.id,
          h: container.popup.h,
          isCollapsed: false,
          name: container.name,
          w: container.popup.w,
          x: e.clientX,
          y: e.clientY,
        })
      );
    };

    return (
      <Details block={container}>
        <Button
          draggable={true}
          onClick={handleOpenContainer}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          rarity={container.rarity}
          ref={ref}
          style={style}
          unselectable="on"
          variant="outline"
          {...props}
        >
          {container.icon}
          <span className="absolute bottom-1 right-1">
            <OpenInNewWindowIcon className="h-2 w-2" />
          </span>
        </Button>
      </Details>
    );
  })
);

BasicContainer.displayName = 'BasicContainer';
