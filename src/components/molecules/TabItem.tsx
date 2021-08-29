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
      <div css={[active && tw`text-red-600`]}>{content}</div>
    </Link>
  );
};
