import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
        <Head>
            <title>Bambucod</title>
            <meta name="description" content="Created by nextjs it contains puzzles and coding challenges"/>
            <link rel="icon" href="/logoCod.jpg" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />

      </RecoilRoot>

  );
}
  
