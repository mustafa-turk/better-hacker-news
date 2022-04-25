import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import SplitLayout from 'components/shared/layouts/SplitLayout';
import StoriesList from 'components/feed/stories-list/StoriesList';
import StoryDetails from 'components/details/story-details/StoryDetails';

import { fetchStories, fetchStoryIds } from 'api/stories';
import useWindowSize from 'hooks/useWindowDimensions';

export default function HomePage({ storyIds, stories, initialSelectedStoryId }) {
  const router = useRouter();
  const [selectedStoryId, setSelectedStoryId] = useState(initialSelectedStoryId);
  const { isMobile } = useWindowSize();

  function handleStoryClick(storyId) {
    if (isMobile) {
      setSelectedStoryId(storyId);
    } else {
      router.push(`/${storyId}`);
    }
  }

  return (
    <SplitLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <SplitLayout.Left only={isMobile}>
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
        <StoryDetails storyId={selectedStoryId} />
      </SplitLayout.Right>
    </SplitLayout>
  );
}

export async function getServerSideProps() {
  const storyIds = await fetchStoryIds();
  const stories = await fetchStories({ from: 0, to: 30, storyIds });
  const initialSelectedStoryId = storyIds[0];

  return { props: { storyIds, stories, initialSelectedStoryId } };
}
