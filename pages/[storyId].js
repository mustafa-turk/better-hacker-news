import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchStory } from 'api/stories';

import StoryDetails from 'components/details/story-details/StoryDetails';
import DetailsLayout from 'components/shared/layouts/DetailsLayout';
import { ArrowLeft } from 'components/shared/Icon';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';

export default function StoryDetailsPage() {
  const router = useRouter();
  const { storyId } = router.query;
  const { data: story = {}, isLoading } = useQuery(['story', storyId], () => fetchStory(storyId));

  return (
    <DetailsLayout>
      <Head>
        <title>{story.title}</title>
      </Head>
      <Box mb={3}>
        <Button>
          <ArrowLeft size={24} onClick={() => router.back()} />
        </Button>
      </Box>

      <StoryDetails storyId={storyId} story={story} isLoading={isLoading} />
    </DetailsLayout>
  );
}
