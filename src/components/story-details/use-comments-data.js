import { useQuery } from 'react-query';
import { fetchComments } from 'helpers/api';

export default function useCommentsData(storyId) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery(['comments', storyId], () => fetchComments(storyId), {
    retry: true,
  });

  return {
    isLoading,
    isError,
    comments,
    isEmpty: !comments || comments.length === 0,
  };
}
