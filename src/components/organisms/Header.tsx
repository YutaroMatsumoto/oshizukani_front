import "twin.macro";
import { Button } from "src/components/molecules/Button";
import { Tab } from "src/components/organisms/Tab";
import { IconButton, IconType } from "src/components/molecules/IconButton";
import { useState } from "react";

export const Header = () => {
  const auth = true; // 暫定対応
  const [showSettingModal, setshowSettingModal] = useState(false);

  return (
    <header tw="flex items-center py-4 w-full h-16 fixed bg-white">
      <div
        tw="flex items-center ml-10 font-black text-green-400 cursor-pointer"
        onClick={() => console.log("Click Logo")}
      >
        oshizukani
      </div>
      <div tw="mx-auto">
        <Tab />
      </div>
      <div tw=""></div>
      <div tw="flex items-center mr-10 ml-5 cursor-pointer">
        {auth ? (
          <IconButton
            type={IconType.SETTING}
            color="#065f46"
            size={25}
            showModal={showSettingModal}
            onClick={() => setshowSettingModal(!showSettingModal)}
          />
        ) : (
          <Button text="ログイン" onClick={() => console.log("Login")} />
        )}
      </div>
    </header>
  );
};
