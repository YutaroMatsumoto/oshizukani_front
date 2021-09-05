import "twin.macro";
import { RiUserSettingsFill } from "react-icons/ri";
import { useMemo } from "react";

// 使うiconが増えそうな場合はここにtypeにorで追加していく
type IconType = {
  type: "setting" | "test";
};

interface Props {
  type: "setting";
  color: string;
  size: number | string;
  onClick?: () => void;
}

export const IconButton = ({ type, color, size, onClick }: Props) => {
  const icon = useMemo(() => {
    switch (type) {
      case "setting":
        return <RiUserSettingsFill color={color} size={size} />;
        break;
      default:
        break;
    }
  }, [type]);
  return <div onClick={onClick}>{icon}</div>;
};
