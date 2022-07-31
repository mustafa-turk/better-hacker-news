import Head from 'next/head';

import StoriesList from 'components/stories-list/stories-list';
import MainLayout from 'components/common/layouts/main-layout';

import { fetchStories } from 'helpers/api';
import { Heading } from 'components/common';

export default function StoriesPage({ stories }) {
  return (
    <MainLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <Heading mx={1} my={3}>
        Hackernews
      </Heading>

      <StoriesList initialData={stories} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const stories = await fetchStories({ from: 0, to: 30 });

  return { props: { stories } };
}
