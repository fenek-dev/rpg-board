import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/shared/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      rarity: 'common',
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-9 p-2',
        icon: 'h-8 w-8',
        lg: 'h-10 rounded-md px-8',
        slot: 'size-12',
        sm: 'h-8 rounded-md px-3 text-xs',
      },
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      },
      // eslint-disable-next-line perfectionist/sort-objects
      rarity: {
        common: 'border-input',
        epic: 'border-purple-700/70 bg-purple-950/80',
        legendary: 'border-yellow-700/70 bg-yellow-950/80',
        rare: 'border-blue-700/70 bg-blue-950/80',
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild = false, className, rarity, size, variant, ...props }, ref) => {
      const Comp = asChild ? Slot : 'button';
      return <Comp className={cn(buttonVariants({ className, rarity, size, variant }))} ref={ref} {...props} />;
    }
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
