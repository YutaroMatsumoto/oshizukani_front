interface Props {
  width?: string;
  height?: string;
  color?: boolean;
  auth: boolean;
}

export const Button = ({ auth, color, width, height }: Props) => {
  return (
    // <button className="w-20 h-9 rounded-lg border-2 border-white bg-green-400 ">
    //   <span className="font-black text-white">
    //     {auth ? "ログアウト" : "ログイン"}
    //   </span>
    // </button>
    <button className="w-20 h-9 rounded-lg border-2 border-green-400 bg-white ">
      <span className="font-black text-green-400">
        {auth ? "ログアウト" : "ログイン"}
      </span>
    </button>
  );
};
