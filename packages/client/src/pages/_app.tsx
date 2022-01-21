import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { defaultSEO } from "utils/seo";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
