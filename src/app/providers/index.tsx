import React from 'react';

import { DialogProvider } from './dialog';

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <DialogProvider>{children}</DialogProvider>;
};
