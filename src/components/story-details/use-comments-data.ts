import { useQuery } from 'react-query';
import { fetchComments } from 'src/helpers/api';

import { CommentType } from 'src/helpers/types';

type CommentsData = {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  comments: CommentType[];
};

export default function useCommentsData(storyId: number): CommentsData {
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
