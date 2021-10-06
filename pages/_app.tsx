import type { AppProps } from "next/app";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Menu Alexander</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
