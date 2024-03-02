import { Progress } from '~/shared/components/ui/progress';

interface EntityBarProps {
  color: string;
  max: number;
  value: number;
}

export const EntityBar = ({ color, max, value }: EntityBarProps) => {
  return (
    <span className="absolute -bottom-4 left-0 right-0">
      <Progress indicatorClassName={color} max={max} value={value} />
      <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-base font-bold leading-none text-muted-foreground">
        {value} / {max}
      </span>
    </span>
  );
};
