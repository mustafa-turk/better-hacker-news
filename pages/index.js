import Head from 'next/head';

import SplitLayout from 'components/shared/layouts/SplitLayout';
import StoriesList from 'components/feed/stories-list/StoriesList';
import StoryDetails from 'components/details/story-details/StoryDetails';

import { fetchStories } from 'api/stories';

import useWindowSize from 'hooks/useWindowDimensions';

export default function StoriesPage({ stories, activeStoryId }) {
  const { isDesktop } = useWindowSize();

  return (
    <SplitLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <SplitLayout.Left hidden={!isDesktop && activeStoryId}>
        <StoriesList initialData={stories} />
      </SplitLayout.Left>

      <SplitLayout.Right hidden={!activeStoryId}>
        <StoryDetails storyId={activeStoryId} />
      </SplitLayout.Right>
    </SplitLayout>
  );
}

export async function getServerSideProps() {
  const stories = await fetchStories({ from: 0, to: 30 });

  return { props: { stories } };
}
