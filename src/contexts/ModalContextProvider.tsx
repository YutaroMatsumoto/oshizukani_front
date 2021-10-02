import React, { createContext, useContext } from "react";
import { ModalContentState, ModalContentStateType } from "src/models/modal";

interface Props {
  children: React.ReactNode;
}

interface ModalContentTypeState {
  type: ModalContentStateType;
}

const initialState: ModalContentTypeState = {
  type: ModalContentState.ACCOUNT,
};

export const ModalContext = createContext<ModalContentTypeState>(initialState);

// なぜProviderは必要になるのか？
export const ModalContextProvider = ({ children }: Props) => {
  return (
    <ModalContext.Provider value={initialState}>
      {children}
    </ModalContext.Provider>
  );
};
