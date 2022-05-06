import React from 'react'
import 'twin.macro'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'
import { RoundMessage } from 'src/components/molecules/RoundMessage'

interface Props {
  isMtg: boolean
  isError: boolean
}

// export const NowMtg = React.memo(() => {})の形だとエラーになる？
const NowMtg = ({ isMtg, isError = false }: Props) => {
  return (
    <BaseTemplate>
      {isError ? (
        <RoundMessage
          message="エラーが起きています。"
          subMessage="画面をリロードしてください。"
          isError
        />
      ) : isMtg ? (
        <RoundMessage message="現在会議中です。" subMessage="お静かに。" />
      ) : (
        <p tw="text-2xl">会議は行われていません。</p>
      )}
    </BaseTemplate>
  )
}

export default React.memo(NowMtg)
