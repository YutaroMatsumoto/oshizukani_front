import 'twin.macro';
import { useCallback } from 'react';
import { NavbarItem } from 'src/components/organisms/modal/NavbarItem';
import { IoMdNotificationsOutline } from 'react-icons/io';
// import { BiCalendarPlus } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { RiAccountCircleFill } from 'react-icons/ri';
import {
  ModalContentState,
  ModalContentStateLabel,
} from 'src/contexts/ModalContextProvider';
import {
  useModalDispatchContext,
  ModalContext,
} from 'src/contexts/ModalContextProvider';
import { useContext } from 'react';

export const ModalNavbar = () => {
  const modalType = useContext(ModalContext);
  const modalDispatch = useModalDispatchContext();

  const showAccountInfo = useCallback(
    () => modalDispatch({ type: 'account' }),
    []
  );

  const showMember = useCallback(() => modalDispatch({ type: 'member' }), []);

  // const showCreateSchedule = useCallback(
  //   () => modalDispatch({ type: 'createSchedule' }),
  //   []
  // );

  const showNotification = useCallback(
    () => modalDispatch({ type: 'notification' }),
    []
  );

  return (
    <div tw="w-56 pt-2.5 bg-gray-100 rounded-l-md">
      <NavbarItem
        content={ModalContentStateLabel.account}
        // contentType={ModalContentState.LOGOUT}
        active={modalType.type === ModalContentState.ACCOUNT}
        icon={<RiAccountCircleFill size={20} />}
        onClick={showAccountInfo}
      />
      <NavbarItem
        content={ModalContentStateLabel.member}
        // contentType={ModalContentState.MEMBER}
        active={modalType.type === ModalContentState.MEMBER}
        icon={<BsPeople size={20} />}
        onClick={showMember}
      />
      {/* <NavbarItem
        content={ModalContentStateLabel.createSchedule}
        // contentType={ModalContentState.CREATESCHEDULE}
        active={modalType.type === ModalContentState.CREATESCHEDULE}
        icon={<BiCalendarPlus size={20} />}
        onClick={showCreateSchedule}
      /> */}
      <NavbarItem
        content={ModalContentStateLabel.notification}
        // contentType={ModalContentState.NOTIFICATION}
        active={modalType.type === ModalContentState.NOTIFICATION}
        icon={<IoMdNotificationsOutline size={20} />}
        onClick={showNotification}
      />
    </div>
  );
};
