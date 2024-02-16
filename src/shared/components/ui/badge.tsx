import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/shared/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    defaultVariants: {
      rarity: 'common',
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground border-input',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      // eslint-disable-next-line perfectionist/sort-objects
      rarity: {
        common: 'border-input',
        epic: 'border-purple-700/40 bg-purple-900/30',
        legendary: 'border-yellow-700/50 bg-yellow-900/30',
        rare: 'border-blue-700/40 bg-blue-900/30',
      },
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, rarity, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ rarity, variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
