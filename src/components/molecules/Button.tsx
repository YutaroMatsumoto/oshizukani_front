import "twin.macro";

interface Props {
  width?: string;
  height?: string;
  color?: boolean;
  text: string;
  onClick: () => void;
}

export const Button = ({ color, width, height, text, onClick }: Props) => {
  return (
    <button
      tw="w-20 h-9 rounded-lg border-2 border-green-400 bg-white"
      onClick={onClick}
    >
      <span tw="font-black text-green-400">{text}</span>
    </button>
  );
};
