import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '~/shared/components/ui/button';

import { selectCurrentEntityId, selectQueue } from '../../store/combat.selectors';

export const Queue = () => {
  const queue = useSelector(selectQueue);
  const current_id = useSelector(selectCurrentEntityId);

  console.log(queue, current_id);

  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2">
      <div className="flex items-center gap-1">
        {Object.entries(queue).map(([id, entity], i) => (
          <React.Fragment key={id}>
            {i !== 0 && <ArrowRightIcon className="text-2xl" />}
            <Button className="text-2xl" size="icon" variant={current_id === id ? 'default' : 'outline'}>
              {entity.icon}
            </Button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
