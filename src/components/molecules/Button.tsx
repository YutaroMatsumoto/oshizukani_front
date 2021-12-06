import "twin.macro";

interface Props {
  className?: string;
  title: string;
  onClick: () => void;
}

export const Button = ({ className, title, onClick }: Props) => {
  return (
    <button
      tw="w-20 h-9 rounded-lg border-2 border-green-400 bg-white"
      className={className}
      onClick={onClick}
    >
      <span tw="font-black text-green-400">{title}</span>
    </button>
  );
};
