import 'twin.macro'
import { useMemo, useContext } from 'react'
import { ModalContext } from 'src/contexts/ModalContextProvider'
import { NotificationModal } from 'src/components/organisms/modal/contents/NotificationModal'
// import { CreateScheduleModal } from "src/components/organisms/Modal/ModalContents/CreateScheduleModal";
import { MemberModal } from 'src/components/organisms/modal/contents/MemberModal'
import { AccountInfoModal } from 'src/components/organisms/modal/contents/AccountInfoModal'
import { ModalContentState } from 'src/contexts/ModalContextProvider'

type Props = {
  onClick?: () => void
}

export const ModalContent = ({ onClick }: Props) => {
  const context = useContext(ModalContext)

  const contentType = useMemo(() => {
    switch (context.type) {
      case ModalContentState.ACCOUNT:
        return <AccountInfoModal />
      case ModalContentState.MEMBER:
        return <MemberModal />
      case ModalContentState.NOTIFICATION:
        return <NotificationModal />
      // fase1ではスケジュール追加機能はなしにする
      // case ModalContentState.CREATESCHEDULE:
      //   return <CreateScheduleModal />;
      case '':
      default:
        return
    }
  }, [context])
  return (
    <div tw="w-full pt-6 px-7">
      <div tw="h-full">{contentType}</div>
    </div>
  )
}
