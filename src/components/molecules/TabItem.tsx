import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";

interface Props {
  content: string;
  href: string;
  active: boolean;
}

export const TabItem = ({ content, href, active }: Props) => {
  return (
    <Link href={href}>
      <div>
        <div css={[active && tw`text-green-400`]}>{content}</div>
        <div tw="h-1 rounded" css={[active && tw`bg-green-400`]}></div>
      </div>
    </Link>
  );
};
