import "twin.macro";
import { useContext, useCallback } from "react";
import { Button } from "src/components/molecules/Button";
import { Tab } from "src/components/organisms/Tab";
import { IconButton, IconType } from "src/components/molecules/IconButton";
import { Modal } from "src/components/organisms/Modal/Modal";
import {
  ModalContext,
  useModalDispatchContext,
} from "src/contexts/ModalContextProvider";

export const Header = () => {
  const auth = true; // 暫定対応
  const context = useContext(ModalContext);
  const modalDispatch = useModalDispatchContext();
  const showMember = useCallback(() => modalDispatch({ type: "member" }), []);

  return (
    <header tw="flex items-center py-4 px-14 w-full h-16 fixed bg-white z-10">
      <div
        tw="flex items-center font-black text-green-400 cursor-pointer"
        onClick={() => console.log("Click Logo")}
      >
        oshizukani
      </div>
      {/* TODO: Tab機能は将来的に必要になったら入れる */}
      {/* <div tw="mx-auto">
        <Tab />
      </div> */}
      <div tw="ml-auto">
        <div tw="flex items-center cursor-pointer">
          {auth ? (
            <IconButton
              type={IconType.SETTING}
              color="#065f46"
              size={25}
              onClick={showMember}
            />
          ) : (
            <Button text="ログイン" onClick={() => console.log("Login")} />
          )}
          {context.visible && <Modal />}
        </div>
      </div>
    </header>
  );
};
