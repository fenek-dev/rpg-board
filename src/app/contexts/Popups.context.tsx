import React, { createContext, useCallback, useContext, useState } from 'react';

export interface Popup {
  block_id: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

interface PopupContextProps {
  addPopup: (popup: Popup) => void;
  popups: Record<string, Popup>;
  removePopup: (block_id: string) => void;
  updatePopupPosition: (block_id: string, x: number, y: number) => void;
}

export const PopupContext = createContext<PopupContextProps>({
  addPopup: () => {},
  popups: {},
  removePopup: () => {},
  updatePopupPosition: () => {},
});

export const PopupProvider = ({ children }: React.PropsWithChildren) => {
  const [popups, setPopups] = useState<Record<string, Popup>>({});

  const addPopup = useCallback((popup: Popup) => {
    setPopups((prevPopups) => {
      const updatedPopups = { ...prevPopups };
      updatedPopups[popup.block_id] = popup;
      return updatedPopups;
    });
  }, []);

  const removePopup = useCallback((block_id: string) => {
    setPopups((prevPopups) => {
      const updatedPopups = { ...prevPopups };
      delete updatedPopups[block_id];
      return updatedPopups;
    });
  }, []);

  const updatePopupPosition = useCallback((block_id: string, x: number, y: number) => {
    setPopups((prevPopups) => {
      const updatedPopups = { ...prevPopups };
      const popup = updatedPopups[block_id];
      if (popup) {
        popup.x += x;
        popup.y += y;
      }
      return updatedPopups;
    });
  }, []);

  return (
    <PopupContext.Provider value={{ addPopup, popups, removePopup, updatePopupPosition }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopups = () => useContext(PopupContext);
