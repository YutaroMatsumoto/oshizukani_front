import "twin.macro";
import { useState } from "react";
import { NowMtg } from "src/components/molecules/home/NowMtg";
import { SuggestUserRegistration } from "src/components/molecules/home/SuggestUserRegistration";
import { SuggestApiLink } from "src/components/molecules/home/SuggestApiLink";

const Home = () => {
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(true);
  const [isApiLinked, setIsApiLinked] = useState<boolean>(true);
  const [isMtg, setIsMtg] = useState<boolean>(true);

  if (isUserRegistered) {
    if (isApiLinked) {
      return <NowMtg isMtg={isMtg} />;
    } else {
      return <SuggestApiLink />;
    }
  } else {
    return <SuggestUserRegistration />;
  }
};

export default Home;
