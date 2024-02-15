import { ChevronDownIcon, Cross1Icon, TextAlignBottomIcon } from '@radix-ui/react-icons';

import { PopupOptions } from '~/entities/extendable/popups';
import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/utils';

interface PopupMenuProps extends PopupOptions {
  className?: string;
  onClose: () => void;
}

export const PopupMenu = ({ className, closable, onClose }: PopupMenuProps) => {
  return (
    <div className={cn('flex flex-col gap-1 rounded-md border border-input bg-background bg-opacity-45', className)}>
      {closable && (
        <Button onClick={onClose} size="icon" variant="ghost">
          <Cross1Icon />
        </Button>
      )}
      <Button size="icon" variant="ghost">
        <ChevronDownIcon />
      </Button>
      <Button size="icon" variant="ghost">
        <TextAlignBottomIcon />
      </Button>
    </div>
  );
};
