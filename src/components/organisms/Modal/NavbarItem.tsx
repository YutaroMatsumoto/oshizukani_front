import "twin.macro";
import React from "react";
import {
  ModalContentStateType,
  ModalContentStateLabelType,
} from "src/models/modal";

interface Props {
  content: ModalContentStateLabelType;
  contentType: ModalContentStateType;
  icon: React.ReactNode;
  onClick: (type: ModalContentStateType) => void;
}

export const NavbarItem = ({ content, contentType, icon, onClick }: Props) => {
  return (
    <div
      tw="flex items-center px-3.5 py-1.5 cursor-pointer hover:bg-green-200"
      onClick={() => onClick(contentType)}
    >
      {icon}
      <span tw="ml-2">{content}</span>
    </div>
  );
};
