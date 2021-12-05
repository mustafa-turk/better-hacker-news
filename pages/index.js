import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { fetchStory, fetchTopStoryIds } from 'api/stories';
import { SplitLayout } from 'components/shared/Layout/styled';
import StoriesList, { StoryListItem } from 'components/feed/StoriesList';
import Layout from 'components/shared/Layout';
import Header from 'components/feed/Header';
import Details from 'components/details/StoryDetails';
import useWindowSize from 'hooks/useWindowDimensions';

export default function HomePage({ storyIds, initStories }) {
  const router = useRouter();
  const [selectedStoryId, setSelectedStoryId] = useState(storyIds[0]);
  const { width } = useWindowSize();
  const isCompactView = width > 900;

  function handleStoryClick(storyId) {
    if (isCompactView) {
      setSelectedStoryId(storyId);
    } else {
      router.push(`/story/${storyId}`);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Better Hacker News | Stories</title>
      </Head>
      <SplitLayout.Wrapper>
        <SplitLayout.Left showPartialView={isCompactView}>
          <Header>Hacker News</Header>
          <StoriesList storyIds={storyIds} initStories={initStories}>
            {(stories) =>
              stories.map((story) => (
                <StoryListItem
                  key={story.id}
                  story={story}
                  isActive={story.id === selectedStoryId}
                  onClick={() => handleStoryClick(story.id)}
                />
              ))
            }
          </StoriesList>
        </SplitLayout.Left>
        <SplitLayout.Right>
          <Details storyId={selectedStoryId} />
        </SplitLayout.Right>
      </SplitLayout.Wrapper>
    </Layout>
  );
}

export async function getServerSideProps() {
  const storyIds = await fetchTopStoryIds();
  const initStories = await Promise.all(
    storyIds.slice(0, 30).map((storyId) => fetchStory(storyId)),
  );
  return { props: { storyIds, initStories } };
}
