import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '~/shared/utils';

interface ProgressProps {
  indicatorClassName?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressProps
>(({ children, className, indicatorClassName, max, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    className={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', className)}
    max={max}
    ref={ref}
    value={value}
    {...props}
  >
    {children}
    <ProgressPrimitive.Indicator
      className={cn('h-full w-full flex-1 bg-primary transition-all', indicatorClassName)}
      style={{ transform: `translateX(-${100 - ((value! / max!) * 100 || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

interface ProgressDisplayProps extends ProgressProps {
  progressDelta?: number;
}

const ProgressDisplay = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressDisplayProps
>(({ children, className, indicatorClassName, max, progressDelta, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', className)}
      max={max}
      ref={ref}
      value={value}
      {...props}
    >
      {children}
      <ProgressPrimitive.Indicator
        className={cn('z-10 h-full w-full flex-1 bg-primary transition-all', indicatorClassName)}
        style={{ transform: `translateX(-${100 - (((value! - (progressDelta || 0)) / max!) * 100 || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

export { Progress, ProgressDisplay };
