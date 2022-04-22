import React from 'react'
import 'twin.macro'

interface Props {
  label: string
  className?: string
}

export const FormField = ({
  label,
  className,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div tw="flex items-center" className={className}>
      <label tw="text-sm font-medium w-28">{label}</label>
      <div>{children}</div>
    </div>
  )
}
