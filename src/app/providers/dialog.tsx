import React, { createContext, useContext, useState } from 'react';

interface DialogState {
  action?: () => void;
  cancel?: () => void;
  description?: string;
  title: string;
}

interface DialogContextType {
  closeDialog: () => void;
  dialog: DialogState | null;
  openDialog: (state: DialogState) => void;
}

const initialDialogContext: DialogContextType = {
  closeDialog: () => {},
  dialog: null,
  openDialog: () => {},
};

const DialogContext = createContext<DialogContextType>(initialDialogContext);

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }: React.PropsWithChildren) => {
  const [dialog, setDialog] = useState<DialogState | null>(null);

  const openDialog = (state: DialogState) => {
    setDialog(state);
  };

  const closeDialog = () => {
    setDialog(null);
  };

  return (
    <DialogContext.Provider
      value={{
        closeDialog,
        dialog,
        openDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
