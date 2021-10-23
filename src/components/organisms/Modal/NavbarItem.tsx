import tw from "twin.macro";
import React from "react";
import {
  ModalContentStateType,
  ModalContentStateLabelType,
  ModalContentStateLabel,
} from "src/contexts/ModalContextProvider";

interface Props {
  content: ModalContentStateLabelType;
  // contentType: ModalContentStateType;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export const NavbarItem = ({ content, icon, active, onClick }: Props) => {
  return (
    <div
      tw="flex items-center px-3.5 py-1.5 cursor-pointer hover:bg-green-200"
      css={[active && tw`bg-green-200`]}
      onClick={onClick}
    >
      {icon}
      <span tw="ml-2">{content}</span>
    </div>
  );
};
