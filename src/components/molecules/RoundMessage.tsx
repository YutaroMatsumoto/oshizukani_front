import tw from 'twin.macro'

type Props = {
  className?: string
  message: string
  subMessage: string
  isError?: boolean
}

export const RoundMessage = ({
  message,
  subMessage,
  isError = false,
}: Props) => {
  return (
    <div
      tw="flex justify-center items-center text-center w-80 h-80 border-4 border-solid rounded-full"
      css={[isError ? tw`border-red` : tw`border-lightGreen`]}
    >
      <div
        tw="leading-7 font-bold"
        css={[isError ? tw`text-xl text-red ` : tw`text-2xl text-lightGreen`]}
      >
        <p>{message}</p>
        <p>{subMessage}</p>
      </div>
    </div>
  )
}
