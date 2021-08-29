import "twin.macro";
import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div tw="h-full">
      <Component {...pageProps} />
      <GlobalStyles />
    </div>
  );
};
export default MyApp;
