import "twin.macro";

interface Props {
  width?: string;
  height?: string;
  color?: boolean;
  auth: boolean;
  onClick: () => void;
}

export const Button = ({ auth, color, width, height, onClick }: Props) => {
  return (
    // <button tw="w-20 h-9 rounded-lg border-2 border-white bg-green-400 ">
    //   <span tw="font-black text-white">
    //     {auth ? "ログアウト" : "ログイン"}
    //   </span>
    // </button>
    <button
      tw="w-20 h-9 rounded-lg border-2 border-green-400 bg-white"
      onClick={onClick}
    >
      <span tw="font-black text-green-400">
        {auth ? "ログアウト" : "ログイン"}
      </span>
    </button>
  );
};
