import Head from 'next/head';

import MainLayout from 'src/components/common/layouts/main-layout';
import StoriesList from 'src/components/stories-list/stories-list';

export default function StoriesPage() {
  return (
    <MainLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <StoriesList />
    </MainLayout>
  );
}
