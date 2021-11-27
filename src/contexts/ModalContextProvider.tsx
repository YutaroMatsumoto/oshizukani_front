import React, { createContext, Dispatch, useContext, useReducer } from "react";

export const ModalContentState = {
  DEFAULT: "",
  NOTIFICATION: "notification",
  CREATESCHEDULE: "createSchedule",
  MEMBER: "member",
  LOGOUT: "logout",
} as const;
export type ModalContentStateType =
  typeof ModalContentState[keyof typeof ModalContentState];

export const ModalContentStateLabel = {
  notification: "通知",
  // createSchedule: "予定作成",
  member: "メンバー",
  logout: "ログアウト",
} as const;
export type ModalContentStateLabelType =
  typeof ModalContentStateLabel[keyof typeof ModalContentStateLabel];

interface Props {
  children: React.ReactNode;
}

interface ModalContentTypeState {
  visible: boolean;
  type: ModalContentStateType;
}

const initialState: ModalContentTypeState = {
  visible: false,
  type: ModalContentState.DEFAULT,
};

type ModalContextAction =
  | { type: "default" }
  | { type: "notification" }
  | { type: "createSchedule" }
  | { type: "member" }
  | { type: "logout" }
  | { type: "close" };

const reducer = (state: ModalContentTypeState, action: ModalContextAction) => {
  switch (action.type) {
    case "default":
      return {
        visible: true,
        type: ModalContentState.DEFAULT,
      };
    case "notification":
      return {
        visible: true,
        type: ModalContentState.NOTIFICATION,
      };
    // case "createSchedule":
    //   return {
    //     visible: true,
    //     type: ModalContentState.CREATESCHEDULE,
    //   };
    case "member":
      return {
        visible: true,
        type: ModalContentState.MEMBER,
      };
    case "logout":
      return {
        visible: true,
        type: ModalContentState.LOGOUT,
      };
    case "close":
      return {
        visible: false,
        type: ModalContentState.DEFAULT,
      };
    default:
      console.log("reducer: unexpected action type");
      return state;
  }
};

export const ModalContext = createContext<ModalContentTypeState>(initialState);

export const ModalDispatchContext = createContext<
  Dispatch<ModalContextAction> | undefined
>(undefined);

export const useModalDispatchContext = () => {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    console.log("error: context is undefined");
    throw new Error();
  }
  return context;
};

// なぜProviderは必要になるのか？
export const ModalContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
