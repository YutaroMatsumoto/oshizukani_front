import tw from 'twin.macro';

interface Props {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  black?: boolean;
  onClick: () => void;
}

export const Button = ({ className, title, icon, black, onClick }: Props) => {
  return (
    <button
      tw="flex items-center h-9 px-5 rounded-lg border-2  bg-white"
      css={[black ? tw`border-black` : tw`border-green-400`]}
      className={className}
      onClick={onClick}
    >
      {icon && (
        <div
          tw="fill-current mr-2 text-green-400"
          css={[black ? tw`text-black` : tw`text-green-400`]}
        >
          {icon}
        </div>
      )}
      <span tw="font-black " css={[!black && tw`text-green-400`]}>
        {title}
      </span>
    </button>
  );
};
