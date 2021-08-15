import type { NextPage } from "next";
import { Children } from "react";
import { BaseTemplate } from "src/components/templates/BaseTemplate";
// 必要があればtwin.macroを導入してみる
// import "twin.macro";

const Home = () => {
  return (
    <BaseTemplate>
      <div className="h-full">aaa</div>
    </BaseTemplate>
  );
};

export default Home;
