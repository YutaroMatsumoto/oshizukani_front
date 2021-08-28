import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Component {...pageProps} />
      <GlobalStyles />
    </div>
  );
}
export default MyApp;
