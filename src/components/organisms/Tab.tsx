import "twin.macro";
import { useEffect, useState } from "react";
import { TabItem } from "src/components/molecules/TabItem";
import { useRouter } from "next/dist/client/router";

interface Props {
  // tab: string;
}

export const Tab = ({}: Props) => {
  const [tabNum, setTabNum] = useState(0);
  console.log("component描画");
  const { pathname } = useRouter();
  console.log("pathnameを表示：", pathname);
  useEffect(() => {
    console.log("useEffectが実行されている");
    switch (pathname) {
      case "/":
        setTabNum(1);
        break;
      case "/day":
        setTabNum(2);
        break;
      case "/week":
        setTabNum(3);
        break;
      // case "/createSchedule":
      //   setTabNum(4);
      //   break;
      default:
        setTabNum(0);
        break;
    }
  }, []);
  return (
    <div tw="flex">
      <div tw="cursor-pointer">
        <TabItem content="Now" href="/" active={tabNum === 1} />
      </div>
      <div tw="ml-8 cursor-pointer">
        <TabItem content="Day" href="day" active={tabNum === 2} />
      </div>
      <div tw="ml-8 cursor-pointer">
        <TabItem content="Week" href="week" active={tabNum === 3} />
      </div>
      {/* <div tw="ml-14 cursor-pointer">
        <TabItem
          content="予定の作成"
          href="createSchedule"
          active={tabNum === 4}
        />
      </div> */}
    </div>
  );
};
