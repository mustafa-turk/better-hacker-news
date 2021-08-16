import Head from 'next/head';
import { fetchStory, fetchTopStoryIds } from 'api/stories';
import Navbar from 'components/shared/Navbar';
import StoriesContainer from 'components/feed/StoriesContainer';
import Layout from 'components/shared/Layout/Layout';
import Header from 'components/feed/Header';

export default function HomePage({ initialStories, storyIds }) {
  return (
    <Layout>
      <Head>
        <title>Better Hacker News | Top stories</title>
      </Head>
      <Header>Hacker News</Header>
      <Navbar />
      <StoriesContainer storyIds={storyIds} initialStories={initialStories} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const storyIds = await fetchTopStoryIds();
  const initialStories = await Promise.all(
    storyIds.slice(0, 30).map((storyId) => fetchStory(storyId)),
  );
  return { props: { storyIds, initialStories } };
}
