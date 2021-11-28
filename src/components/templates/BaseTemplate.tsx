import "twin.macro";
import React from "react";
// import { Footer } from "src/components/organisms/Footer";
import { Header } from "src/components/organisms/Header";

interface Props {
  test?: string;
}

export const BaseTemplate = ({ children }: React.PropsWithChildren<Props>) => {
  // const [state, setState] = useState(0);
  // console.log("aiueo");
  // const a = "aiueo";
  // const b = () => {
  //   console.log("sasisuseso");
  // };
  // console.log("aを表示", a);
  // const testMemo = useMemo(() => {
  //   console.log("kakikukeko");
  //   return state;
  // }, [state]);
  // console.log("stateを表示：", state);
  // console.log("testmemoを表示：", testMemo);

  return (
    <div tw="h-full bg-gray-100">
      <Header />
      <div tw="pt-16 h-full flex justify-center items-center">{children}</div>
    </div>
  );
};
