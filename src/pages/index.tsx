import "twin.macro";
import type { NextPage } from "next";
import { Children, useState } from "react";
import { BaseTemplate } from "src/components/templates/BaseTemplate";
import { NowMtg } from "src/components/molecules/NowMtg";

const Home = () => {
  const [isMtg, setIsMtg] = useState(true);
  console.log(isMtg);
  return (
    <BaseTemplate>{isMtg ? <NowMtg /> : <div>あいうえお</div>}</BaseTemplate>
  );
};

export default Home;
