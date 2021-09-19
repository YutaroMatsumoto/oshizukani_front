import "twin.macro";
import { RiUserSettingsFill } from "react-icons/ri";
import { useMemo } from "react";

export const IconType = {
  SETTING: "setting",
  TEST: "test",
} as const;
type IconType = typeof IconType[keyof typeof IconType];
console.log(IconType);

interface Props {
  type: IconType;
  color: string;
  size: number | string;
  showModal: boolean;
  onClick?: () => void;
}

export const IconButton = ({
  type,
  color,
  size,
  showModal,
  onClick,
}: Props) => {
  const icon = useMemo(() => {
    switch (type) {
      case IconType.SETTING:
        return <RiUserSettingsFill color={color} size={size} />;
      default:
        break;
    }
  }, [type]);
  return (
    <>
      {showModal && (
        <div tw="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10">
          <div
            tw="absolute bg-black bg-opacity-50 inset-0"
            onClick={onClick}
          ></div>
          <div tw="h-1/2 w-1/2 z-10 bg-white cursor-default rounded-md">
            test
          </div>
        </div>
      )}
      <div onClick={onClick}>{icon}</div>
    </>
  );
};
