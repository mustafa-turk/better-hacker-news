import Head from 'next/head';

import StoriesList from 'src/components/stories-list/stories-list';
import MainLayout from 'src/components/common/layouts/main-layout';

import { fetchStories } from 'src/helpers/api';

export default function StoriesPage({ stories }) {
  return (
    <MainLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <StoriesList initialData={stories} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const stories = await fetchStories(0, 30);

  return { props: { stories } };
}