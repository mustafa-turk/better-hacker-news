import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchStory } from 'api/stories';

export default function useStoryDetails({ storyId }) {
  const {
    data: story = {},
    isLoading,
    refetch,
    isError,
  } = useQuery([storyId], ({ queryKey: storyId }) => fetchStory(storyId), {
    manual: true,
    retry: false,
  });

  useEffect(() => {
    refetch(storyId);
  }, [storyId]);

  return {
    story,
    isLoading,
    isError,
  };
}
