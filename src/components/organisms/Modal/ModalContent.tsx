import "twin.macro";
import { useContext } from "react";
import { ModalContext } from "src/contexts/ModalContextProvider";
import { useMemo } from "react";
import { AccountModal } from "src/components/organisms/Modal/ModalContents/AccountModal";
import { NotificationModal } from "src/components/organisms/Modal/ModalContents/NotificationModal";
import { CreateScheduleModal } from "src/components/organisms/Modal/ModalContents/CreateScheduleModal";
import { MemberModal } from "src/components/organisms/Modal/ModalContents/MemberModal";
import { LogoutModal } from "src/components/organisms/Modal/ModalContents/LogoutModal";
import { ModalContentState, ModalContentStateType } from "src/models/modal";

interface Props {
  type: ModalContentStateType | "";
  onClick?: () => void;
}

export const ModalContent = ({ type, onClick }: Props) => {
  // const context = useContext(ModalContext);
  const contentType = useMemo(() => {
    switch (type) {
      case ModalContentState.ACCOUNT:
        return <AccountModal />;
      case ModalContentState.NOTIFICATION:
        return <NotificationModal />;
      case ModalContentState.CREATESCHEDULE:
        return <CreateScheduleModal />;
      case ModalContentState.MEMBER:
        return <MemberModal />;
      case ModalContentState.LOGOUT:
        return <LogoutModal />;
      case "":
      default:
        return;
    }
  }, [type]);
  return (
    <div tw="w-full pt-6 px-14">
      <div>{contentType}</div>
    </div>
  );
};
