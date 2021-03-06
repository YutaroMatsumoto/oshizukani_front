import tw, { css } from 'twin.macro'

type Props = {
  toggleOn: boolean
  onClick: () => void
  onSubmit?: () => void
}

// 単純なButtonであり、formではない。今後問題ないか検討。
// toggleのstateは呼び出し側で管理する
export const ToggleButton = ({ toggleOn, onClick, onSubmit }: Props) => {
  return (
    <button
      onClick={() => {
        onClick()
        onSubmit && onSubmit()
      }}
    >
      <div tw="cursor-pointer">
        <div
          tw="items-center w-12 p-1 bg-gray20 rounded-3xl transition"
          css={[toggleOn && tw`transition bg-lightGreen`]}
        >
          <div
            tw="w-4 h-4 bg-white rounded-3xl transition-transform ease-in-out"
            css={[
              toggleOn
                ? css`
                    transform: translateX(24px) translateY(0px);
                  `
                : css`
                    transform: translateX(0px) translateY(0px);
                  `,
            ]}
          />
        </div>
      </div>
    </button>
  )
}
