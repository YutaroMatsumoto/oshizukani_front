import "twin.macro";
import { useContext } from "react";
import { ModalContext } from "src/contexts/ModalContextProvider";

interface Props {
  onClick?: () => void;
}

export const ModalContent = ({ onClick }: Props) => {
  const contextTest = useContext(ModalContext);
  console.log("contextTestを表示:", contextTest.account);
  return (
    <div tw="w-full pt-6 px-14">
      <div>aaa</div>
    </div>
  );
};
