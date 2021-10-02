import "twin.macro";
import { ModalNavbar } from "src/components/organisms/Modal/ModalNavbar";
import { ModalContent } from "src/components/organisms/Modal/ModalContent";
import { useState } from "react";
import { ModalContentState, ModalContentStateType } from "src/models/modal";

interface Props {
  onClick: () => void;
}

export const Modal = ({ onClick }: Props) => {
  const [modalContentType, setModalContentType] =
    useState<ModalContentStateType>(ModalContentState.ACCOUNT);
  return (
    <div tw="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10">
      <div tw="absolute bg-black bg-opacity-50 inset-0" onClick={onClick}></div>
      <div tw="h-2/3 w-1/2 z-10 bg-white cursor-default rounded-md">
        <div tw="flex h-full">
          <ModalNavbar onClick={(type) => setModalContentType(type)} />
          <ModalContent
            type={modalContentType}
            onClick={() => console.log("modal content")}
          />
        </div>
      </div>
    </div>
  );
};
