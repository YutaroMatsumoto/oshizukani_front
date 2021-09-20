import "twin.macro";
import { RiUserSettingsFill } from "react-icons/ri";
import { useMemo } from "react";

export const IconType = {
  SETTING: "setting",
  TEST: "test",
} as const;
type IconType = typeof IconType[keyof typeof IconType];

interface Props {
  type: IconType;
  color: string;
  size: number | string;
  onClick?: () => void;
}

export const IconButton = ({ type, color, size, onClick }: Props) => {
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
      <div onClick={onClick}>{icon}</div>
    </>
  );
};
