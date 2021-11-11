import Head from 'next/head';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchNewStoryIds, fetchStory } from 'api/stories';
import { SplitLayout } from 'components/shared/Layout/styled';
import Navbar from 'components/shared/Navbar';
import Stories from 'components/feed/StoriesList';
import Story from 'components/feed/StoriesList/StoriesListItem';
import Layout from 'components/shared/Layout';
import Header from 'components/feed/Header';
import Details from 'components/details/Details';
import useWindowSize from 'hooks/useWindowDimensions';

export default function HomePage({ initialStories, storyIds }) {
  const router = useRouter();
  const [selectedStoryId, setSelectedStoryId] = useState(storyIds[0]);
  const { width } = useWindowSize();

  const {
    data: selectedStory = {},
    isLoading: isLoadingSelectedStory,
    refetch: fetchSelectedStoryDetails,
  } = useQuery([selectedStoryId], ({ queryKey: storyId }) => fetchStory(storyId), {
    manual: true,
  });

  useEffect(() => {
    fetchSelectedStoryDetails(selectedStoryId);
  }, [fetchSelectedStoryDetails, selectedStoryId]);

  return (
    <Layout>
      <Head>
        <title>Better Hacker News | New stories</title>
      </Head>
      <SplitLayout.Wrapper>
        <SplitLayout.Left isFullWidth={width < 900}>
          <Header>Hacker News</Header>
          <Navbar />
          <Stories storyIds={storyIds} initialStories={initialStories}>
            {(stories) =>
              stories.map((story) => (
                <Story
                  key={story.id}
                  story={story}
                  onClick={() => {
                    width < 900 ? router.push(`/story/${story.id}`) : setSelectedStoryId(story.id);
                  }}
                />
              ))
            }
          </Stories>
        </SplitLayout.Left>
        <SplitLayout.Right>
          <Details
            storyId={selectedStoryId}
            story={selectedStory}
            isLoading={isLoadingSelectedStory}
          />
        </SplitLayout.Right>
      </SplitLayout.Wrapper>
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
