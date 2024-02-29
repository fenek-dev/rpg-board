import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '~/shared/components/ui/button';

export const PlayerEntity = () => {
  return (
    <Button
      className="text-3xl transition-transform"
      onMouseDown={(e) => e.stopPropagation()}
      size="big"
      variant="outline"
    >
      👤
    </Button>
  );
};
