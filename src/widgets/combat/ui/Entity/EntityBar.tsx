import { Progress } from '~/shared/components/ui/progress';

interface EntityBarProps {
  max: number;
  value: number;
}

export const EntityBar = ({ max, value }: EntityBarProps) => {
  return (
    <span className="absolute -bottom-4 left-0 right-0">
      <Progress max={max} value={value} />
      <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sm leading-none text-muted-foreground">
        {value} / {max}
      </span>
    </span>
  );
};
