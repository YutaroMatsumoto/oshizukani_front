import tw from 'twin.macro'
import Link from 'next/link'

type Props = {
  content: string
  href: string
  active: boolean
}

export const TabItem = ({ content, href, active }: Props) => {
  return (
    <Link href={href}>
      <div>
        <div css={[active && tw`text-lightGreen`]}>{content}</div>
        <div tw="h-1 rounded" css={[active && tw`bg-lightGreen`]}></div>
      </div>
    </Link>
  )
}
