import { theme } from 'twin.macro'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'
import Loader from 'react-loader-spinner'

export const Loading = () => {
  return (
    <BaseTemplate>
      <Loader
        type="Watch"
        width={320}
        height={320}
        color={theme`colors.lightGreen`}
      />
    </BaseTemplate>
  )
}
