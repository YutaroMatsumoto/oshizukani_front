import 'twin.macro'
import { useState } from 'react'
import { ToggleField } from 'src/components/molecules/form/ToggleField'

export const NotificationForm = () => {
  const [isNotice, setIsNotice] = useState<boolean>(false)

  return (
    <div tw="px-6">
      <ToggleField
        toggleOn={isNotice}
        title="プッシュ通知を許可"
        onClick={() => setIsNotice(!isNotice)}
        onSubmit={() => console.log('submit')}
        helpMessage="会議が開始されたらプッシュ通知を受け取ります。"
      />
    </div>
  )
}
