import { Entity } from '~/entities/extendable/entity';
import { Button } from '~/shared/components/ui/button';

interface EntityProps {
  entity: Entity;
}

export const EntityIcon = ({ entity }: EntityProps) => {
  return (
    <Button
      className="text-3xl transition-transform"
      onMouseDown={(e) => e.stopPropagation()}
      size="big"
      variant="destructive"
    >
      {entity.icon}
    </Button>
  );
};
