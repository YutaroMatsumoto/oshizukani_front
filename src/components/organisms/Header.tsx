import { Button } from "src/components/molecules/Button";

export const Header = () => {
  const auth = false; // 暫定対応

  return (
    <header className="flex py-4 w-full h-16 fixed bg-white">
      <div
        className="flex items-center ml-10 font-black text-green-400 cursor-pointer"
        onClick={() => console.log("Click Logo")}
      >
        oshizukani
      </div>
      <div className="flex items-center ml-auto mr-10">
        <Button auth={auth} />
      </div>
    </header>
  );
};
