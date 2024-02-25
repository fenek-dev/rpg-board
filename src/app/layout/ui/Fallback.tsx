import { UpdateIcon } from '@radix-ui/react-icons';

export const Fallback = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background text-5xl">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <UpdateIcon className="  h-8 w-8 animate-spin" />
      </span>
    </div>
  );
};
