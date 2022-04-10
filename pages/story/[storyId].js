import Head from 'next/head';
import { useRouter } from 'next/router';
import Details from 'components/details/story-details';
import { useQuery } from 'react-query';
import { fetchStory } from 'api/stories';
import DetailsLayout from 'components/shared/layouts/details-layout';

export default function StoryDetailsPage() {
  const router = useRouter();
  const { storyId } = router.query;
  const { data: story = {}, isLoading } = useQuery(['story', storyId], () => fetchStory(storyId));

  return (
    <DetailsLayout>
      <Head>
        <title>{story.title}</title>
      </Head>
      <Details storyId={storyId} story={story} isLoading={isLoading} />
    </DetailsLayout>
  );
}
