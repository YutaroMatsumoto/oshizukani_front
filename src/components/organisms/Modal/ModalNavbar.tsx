import "twin.macro";
import { NavbarItem } from "src/components/organisms/Modal/NavbarItem";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCalendarPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  ModalContentState,
  ModalContentStateType,
  ModalContentStateLabel,
} from "src/models/modal";

interface Props {
  onClick: (type: ModalContentStateType) => void;
}

export const ModalNavbar = ({ onClick }: Props) => {
  return (
    <div tw="w-48 pt-2.5 bg-gray-100 rounded-l-md">
      <NavbarItem
        content={ModalContentStateLabel.account}
        contentType={ModalContentState.ACCOUNT}
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={() => onClick(ModalContentState.ACCOUNT)}
      />
      <NavbarItem
        content={ModalContentStateLabel.notification}
        contentType={ModalContentState.NOTIFICATION}
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={() => onClick(ModalContentState.NOTIFICATION)}
      />
      <NavbarItem
        content={ModalContentStateLabel.createSchedule}
        contentType={ModalContentState.CREATESCHEDULE}
        icon={<BiCalendarPlus size={20} />}
        onClick={() => onClick(ModalContentState.CREATESCHEDULE)}
      />
      <NavbarItem
        content={ModalContentStateLabel.member}
        contentType={ModalContentState.MEMBER}
        icon={<BsPeople size={20} />}
        onClick={() => onClick(ModalContentState.MEMBER)}
      />
      <NavbarItem
        content={ModalContentStateLabel.logout}
        contentType={ModalContentState.LOGOUT}
        icon={<RiLogoutBoxRLine size={20} />}
        onClick={() => onClick(ModalContentState.LOGOUT)}
      />
    </div>
  );
};
