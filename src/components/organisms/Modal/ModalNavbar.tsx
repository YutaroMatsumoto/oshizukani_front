import "twin.macro";
import { useCallback } from "react";
import { NavbarItem } from "src/components/organisms/Modal/NavbarItem";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCalendarPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  ModalContentState,
  ModalContentStateLabel,
} from "src/contexts/ModalContextProvider";
import { useModalDispatchContext } from "src/contexts/ModalContextProvider";

export const ModalNavbar = () => {
  const modalDispatch = useModalDispatchContext();

  const showAccount = useCallback(() => modalDispatch({ type: "account" }), []);

  const showNotification = useCallback(
    () => modalDispatch({ type: "notification" }),
    []
  );

  const showCreateSchedule = useCallback(
    () => modalDispatch({ type: "createSchedule" }),
    []
  );

  const showMember = useCallback(() => modalDispatch({ type: "member" }), []);

  const showLogout = useCallback(() => modalDispatch({ type: "logout" }), []);

  return (
    <div tw="w-48 pt-2.5 bg-gray-100 rounded-l-md">
      <NavbarItem
        content={ModalContentStateLabel.account}
        contentType={ModalContentState.ACCOUNT}
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={showAccount}
      />
      <NavbarItem
        content={ModalContentStateLabel.notification}
        contentType={ModalContentState.NOTIFICATION}
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={showNotification}
      />
      <NavbarItem
        content={ModalContentStateLabel.createSchedule}
        contentType={ModalContentState.CREATESCHEDULE}
        icon={<BiCalendarPlus size={20} />}
        onClick={showCreateSchedule}
      />
      <NavbarItem
        content={ModalContentStateLabel.member}
        contentType={ModalContentState.MEMBER}
        icon={<BsPeople size={20} />}
        onClick={showMember}
      />
      <NavbarItem
        content={ModalContentStateLabel.logout}
        contentType={ModalContentState.LOGOUT}
        icon={<RiLogoutBoxRLine size={20} />}
        onClick={showLogout}
      />
    </div>
  );
};
