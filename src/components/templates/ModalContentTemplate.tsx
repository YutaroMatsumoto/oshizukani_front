import 'twin.macro'
import React from 'react'
import { Divider } from 'src/components/molecules/Divider'

type Props = {
  title?: string
  unavailable?: boolean
}

export const ModalContentTemplate = ({
  title,
  unavailable = false,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <>
      <div tw="px-2 font-semibold">
        {title}
        {unavailable && (
          <span tw="ml-4 text-red">
            ※こちらの機能は現在ご利用いただけません。
          </span>
        )}
      </div>
      <Divider />
      <div tw="h-124 mt-6">{children}</div>
    </>
  )
}
