import 'twin.macro'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'

interface Props {
  isMtg: boolean
  mtgs?: Array<string>
}

export const NowMtg = ({ isMtg }: Props) => {
  return (
    <BaseTemplate>
      {isMtg ? (
        <div tw="flex justify-center items-center text-center w-80 h-80 border-4 border-solid border-lightGreen rounded-full">
          <div tw="leading-7 text-2xl font-bold text-lightGreen">
            <p>現在会議中です。</p>
            <p>お静かに。</p>
          </div>
        </div>
      ) : (
        <div>会議は行われていません！</div>
      )}
    </BaseTemplate>
  )
}
