import Head from 'next/head';
import { fetchNewStoryIds, fetchStory } from 'api/stories';
import Navigation from 'components/shared/Navbar/Navbar';
import Stories from 'components/feed/Stories';
import Layout from 'components/shared/Layout';
import Header from 'components/feed/Header';

export default function HomePage({ initialStories, storyIds }) {
  return (
    <Layout>
      <Head>
        <title>Better Hacker News | New stories</title>
      </Head>
      <Header>Hacker News</Header>
      <Navigation />
      <Stories storyIds={storyIds} initialStories={initialStories} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const storyIds = await fetchNewStoryIds();
  const initialStories = await Promise.all(
    storyIds.slice(0, 30).map((storyId) => fetchStory(storyId)),
  );
  return { props: { storyIds, initialStories } };
}
