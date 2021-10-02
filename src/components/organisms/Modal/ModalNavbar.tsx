import "twin.macro";
import { NavbarItem } from "src/components/organisms/Modal/NavbarItem";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCalendarPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const ModalNavbar = () => {
  return (
    <div tw="w-48 pt-2.5 bg-gray-100 rounded-l-md">
      <NavbarItem
        content="通知"
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={() => console.log("Tab：通知")}
      />
      <NavbarItem
        content="予定作成"
        icon={<BiCalendarPlus size={20} />}
        onClick={() => console.log("Tab：予定作成")}
      />
      <NavbarItem
        content="メンバー"
        icon={<BsPeople size={20} />}
        onClick={() => console.log("Tab：メンバー")}
      />
      <NavbarItem
        content="ログアウト"
        icon={<RiLogoutBoxRLine size={20} />}
        onClick={() => console.log("Tab：ログアウト")}
      />
    </div>
  );
};
