import 'twin.macro'
import { UserApiSettingForm } from 'src/components/organisms/form/UserApiSettingForm'
import { ModalContentTemplate } from 'src/components/templates/ModalContentTemplate'

export const MemberModal = () => {
  return (
    <ModalContentTemplate title="メンバー" unavailable>
      <UserApiSettingForm />
    </ModalContentTemplate>
  )
}
