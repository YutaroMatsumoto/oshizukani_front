import "twin.macro";
import { useMemo, useContext } from "react";
import { ModalContext } from "src/contexts/ModalContextProvider";
import { AccountModal } from "src/components/organisms/Modal/ModalContents/AccountModal";
import { NotificationModal } from "src/components/organisms/Modal/ModalContents/NotificationModal";
import { CreateScheduleModal } from "src/components/organisms/Modal/ModalContents/CreateScheduleModal";
import { MemberModal } from "src/components/organisms/Modal/ModalContents/MemberModal";
import { LogoutModal } from "src/components/organisms/Modal/ModalContents/LogoutModal";
import { ModalContentState } from "src/contexts/ModalContextProvider";

interface Props {
  onClick?: () => void;
}

export const ModalContent = ({ onClick }: Props) => {
  const context = useContext(ModalContext);

  const contentType = useMemo(() => {
    switch (context.type) {
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
  }, [context]);
  return (
    <div tw="w-full pt-6 px-14">
      <div tw="cursor-pointer">{contentType}</div>
    </div>
  );
};
