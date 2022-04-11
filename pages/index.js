import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import SplitLayout from 'components/shared/layouts/split-layout';
import StoriesList from 'components/feed/stories-list';
import Navbar from 'components/feed/navbar';
import Details from 'components/details/story-details';

import { fetchStories, fetchStoryIds } from 'api/stories';
import useWindowSize from 'hooks/useWindowDimensions';

export default function HomePage({ storyIds, stories, initialSelectedStoryId }) {
  const router = useRouter();
  const { mode } = router.query;

  const { isMobile } = useWindowSize();

  const [selectedStoryId, setSelectedStoryId] = useState(initialSelectedStoryId);

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

      <SplitLayout.Left only={isMobile}>
        <Navbar>
          <Navbar.Item onClick={() => router.push('?mode=top')} isActive={mode === 'top' || !mode}>
            Top
          </Navbar.Item>
          <Navbar.Item onClick={() => router.push('?mode=new')} isActive={mode === 'new'}>
            New
          </Navbar.Item>
        </Navbar>
        <StoriesList storyIds={storyIds} initialStories={stories}>
          {(stories) =>
            stories.map((story) => (
              <StoriesList.Item
                key={story.id}
                story={story}
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
  const storyIds = await fetchStoryIds({ mode: context.query?.mode });
  const stories = await fetchStories({ from: 0, to: 30, storyIds });
  const initialSelectedStoryId = storyIds[0];
  return { props: { storyIds, stories, initialSelectedStoryId } };
}
