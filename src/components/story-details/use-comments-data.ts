import { useQuery } from 'react-query';
import { fetchComments } from 'src/helpers/api';

export default function useCommentsData(storyId: number) {
  const { data, isLoading, isError } = useQuery(
    ['comments', storyId],
    () => fetchComments(storyId),
    {
      retry: true,
    },
  );

  return {
    isLoading,
    isError,
    isEmpty: !data || data.length === 0,
    comments: data,
  };
}
