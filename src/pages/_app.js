import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { colors } from 'theme';
import GlobalStyles from 'src/styles/global-styles';

const queryClient = new QueryClient();

if (process.env.API_MOCKING === 'enabled') {
  require('src/mocks');
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A better Hacker News experience" />
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme color={colors.gray[900]} highlightColor={colors.gray[800]}>
          <Component {...pageProps} />
        </SkeletonTheme>
      </QueryClientProvider>
    </>
  );
}
