import 'twin.macro';
import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { ModalContextProvider } from 'src/contexts/ModalContextProvider';
import { GoogleApi } from 'src/components/GogleApi';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div tw="h-full">
      <ModalContextProvider>
        <GoogleApi />
        <Component {...pageProps} />
        <GlobalStyles />
      </ModalContextProvider>
    </div>
  );
};
export default MyApp;
