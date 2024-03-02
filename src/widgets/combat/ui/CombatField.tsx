import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Separator } from '~/shared/components/ui/separator';

import { EntityIcon } from './Entity';
import { PlayerEntity } from './PlayerEntity';

export const CombatField = () => {
  const dispatch = useDispatch();
  const entities = useSelector((state: RootState) => state.combat.entities);

  return (
    <div className="relative flex h-full w-full items-end justify-between gap-10 p-4 px-8">
      <div>
        <PlayerEntity />
      </div>
      <div className="flex flex-wrap gap-4">
        {Object.entries(entities).map(([id, entity]) => (
          <EntityIcon entity={entity} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
