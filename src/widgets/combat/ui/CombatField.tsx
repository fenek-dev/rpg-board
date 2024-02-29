import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Separator } from '~/shared/components/ui/separator';

import { EntityIcon } from './Entity';
import { PlayerEntity } from './PlayerEntity';

export const CombatField = () => {
  const dispatch = useDispatch();
  const entities = useSelector((state: RootState) => state.combat.entities);

  return (
    <div className="relative flex w-full items-center gap-10 rounded-md border border-input p-4 px-8">
      <div>
        <PlayerEntity />
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-wrap gap-4">
        {entities.map((entity, idx) => (
          <EntityIcon entity={entity} key={idx} />
        ))}
      </div>
    </div>
  );
};
