import Head from 'next/head';
import { useState, useEffect } from 'react';
import { fetchNewStoryIds, fetchStory, fetchTopStoryIds } from 'api/stories';
import SplitLayout from 'components/shared/layouts/split-layout';
import StoriesList, { StoryListItem } from 'components/feed/stories-list';
import Header from 'components/feed/header';
import Details from 'components/details/story-details';
import useWindowSize from 'hooks/useWindowDimensions';
import { useRouter } from 'next/router';

export default function HomePage({ storyIds, initStories }) {
  const router = useRouter();
  const { mode } = router.query;
  const { isMobile } = useWindowSize();
  const [selectedStoryId, setSelectedStoryId] = useState([]);

  useEffect(() => {
    setSelectedStoryId(storyIds[0]);
  }, [storyIds]);

  function handleStoryClick(storyId) {
    if (isMobile) {
      setSelectedStoryId(storyId);
    } else {
      router.push(`/story/${storyId}`);
    }
  }

  return (
    <SplitLayout>
      <Head>
        <title>Better Hacker News | Stories</title>
      </Head>

      <SplitLayout.Left showPartialView={isMobile}>
        <Header>
          <Header.Item onClick={() => router.push('?mode=top')} isActive={mode === 'top' || !mode}>
            Top
          </Header.Item>
          <Header.Item onClick={() => router.push('?mode=new')} isActive={mode === 'new'}>
            New
          </Header.Item>
        </Header>
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
    </SplitLayout>
  );
}

export async function getServerSideProps(context) {
  const mode = context.query?.mode;
  let storyIds = [];
  if (mode === 'new') {
    storyIds = await fetchNewStoryIds();
  } else {
    storyIds = await fetchTopStoryIds();
  }
  const initStories = await Promise.all(
    storyIds.slice(0, 30).map((storyId) => fetchStory(storyId)),
  );
  return { props: { storyIds, initStories } };
}
