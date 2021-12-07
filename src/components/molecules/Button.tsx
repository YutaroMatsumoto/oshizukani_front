import tw from 'twin.macro';
import { useState } from 'react';

interface Props {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  black?: boolean;
  onClick: () => void;
}

export const Button = ({ className, title, icon, black, onClick }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      tw="flex items-center h-9 px-5 rounded-lg border-2  bg-white"
      css={[
        black ? tw`border-black ` : tw`border-green-400`,
        isHover && black && tw`transition bg-black`,
        isHover && !black && tw`transition bg-green-400`,
      ]}
      className={className}
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon && (
        <div
          tw="fill-current mr-2 text-green-400"
          css={[
            black ? tw`text-black` : tw`text-green-400`,
            isHover && tw`transition text-white`,
          ]}
        >
          {icon}
        </div>
      )}
      <span
        tw="font-black"
        css={[
          !black && tw`text-green-400`,
          isHover && tw`transition text-white`,
        ]}
      >
        {title}
      </span>
    </button>
  );
};
