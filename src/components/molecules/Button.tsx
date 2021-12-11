import tw from 'twin.macro';
import { useState } from 'react';

interface Props {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  black?: boolean;
  disable?: boolean;
  onClick: () => void;
}

export const Button = ({
  className,
  title,
  icon,
  black,
  disable,
  onClick,
}: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      tw="flex items-center justify-center h-9 px-5 rounded-lg border-2 bg-white border-green-400"
      css={[
        disable && tw`border-gray-300 cursor-default`,
        black && !disable && tw`border-black`,
        isHover && black && !disable && tw`transition bg-black`,
        isHover && !black && !disable && tw`transition bg-green-400`,
      ]}
      className={className}
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={disable}
    >
      {icon && (
        <div
          tw="fill-current mr-2 text-green-400"
          css={[
            disable && tw`text-gray-300`,
            black && !disable && tw`text-black`,
            isHover && !disable && tw`transition text-white`,
          ]}
        >
          {icon}
        </div>
      )}
      <span
        tw="font-black"
        css={[
          disable && tw`text-gray-300`,
          !black && !disable && tw`text-green-400`,
          isHover && !disable && tw`transition text-white`,
        ]}
      >
        {title}
      </span>
    </button>
  );
};
