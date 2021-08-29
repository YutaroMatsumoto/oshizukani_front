import "twin.macro";
import { Button } from "src/components/molecules/Button";
import { Tab } from "src/components/organisms/Tab";

export const Header = () => {
  const auth = false; // 暫定対応

  return (
    <header tw="flex items-center py-4 w-full h-16 fixed bg-white">
      <div
        tw="flex items-center ml-10 font-black text-green-400 cursor-pointer"
        onClick={() => console.log("Click Logo")}
      >
        oshizukani
      </div>
      <div tw="mx-auto">
        <Tab />
      </div>
      <div tw="flex items-center mr-10">
        <Button auth={auth} />
      </div>
    </header>
  );
};
