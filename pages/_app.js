import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { colors } from 'config';
import Global from '../styles/global';

const queryClient = new QueryClient();

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A better Hacker News experience" />
      </Head>
      <Global />
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme color={colors.gray[900]} highlightColor={colors.gray[800]}>
          <Component {...pageProps} />
        </SkeletonTheme>
      </QueryClientProvider>
    </>
  );
}
