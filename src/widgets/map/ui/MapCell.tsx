import { AccessibilityIcon } from '@radix-ui/react-icons';
import React, { useCallback } from 'react';

import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/utils';

interface MapCellProps {
  disabled: boolean;
  icon: string;
  isCurrentPosition: boolean;
  isSelected: boolean;
  onClick?: (x: number, y: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  x: number;
  y: number;
}

export const MapCell = React.memo(({ disabled, icon, isCurrentPosition, isSelected, onClick, x, y }: MapCellProps) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(x, y, e);
    },
    [x, y]
  );
  return (
    <Button
      className={cn('relative', {
        'ping border-primary': isSelected, // selectedCell[0] === i && selectedCell[1] === j,
      })}
      disabled={disabled}
      onClick={handleClick}
      size="slot"
      variant="outline"
    >
      {isCurrentPosition && <AccessibilityIcon className="absolute left-1 top-1 size-4 text-green-700 opacity-75" />}
      {icon}
    </Button>
  );
});
