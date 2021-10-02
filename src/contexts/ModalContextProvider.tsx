import React, { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface ModalState {
  account: boolean;
  notification: boolean;
  createSchedule: boolean;
  member: boolean;
  logout: boolean;
}

const initialState: ModalState = {
  account: true,
  notification: false,
  createSchedule: false,
  member: false,
  logout: false,
};

export const ModalContext = createContext<ModalState>(initialState);

// なぜProviderは必要になるのか？
export const ModalContextProvider = ({ children }: Props) => {
  return (
    <ModalContext.Provider value={initialState}>
      {children}
    </ModalContext.Provider>
  );
};
