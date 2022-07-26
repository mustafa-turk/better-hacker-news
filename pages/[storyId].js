import StoriesPage from './index';

import { fetchStories } from 'api/stories';
import { useRouter } from 'next/router';

export default function DetailsPage({ stories }) {
  const router = useRouter();
  const { storyId } = router.query;

  return <StoriesPage stories={stories} activeStoryId={storyId} />;
}

export async function getServerSideProps() {
  const stories = await fetchStories({ from: 0, to: 30 });

  return { props: { stories } };
}
