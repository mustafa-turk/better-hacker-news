import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import Global from "../styles/global";

const queryClient = new QueryClient();

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal website of Mustafa Türk" />
      </Head>
      <Global />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
