import Skeleton from 'react-loading-skeleton';
import Comment from './Comment/Comment';
import { useQuery } from 'react-query';
import { fetchComments } from 'api/stories';
import * as Styled from './styled';

export default function CommentsContainer({ storyId, length }) {
  const { data: comments, isLoading } = useQuery(
    ['comments', storyId],
    () => fetchComments(storyId),
    {
      retry: true,
    },
  );
  if (!storyId || isLoading) {
    return (
      <Styled.LoadingComments>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="70%" />
      </Styled.LoadingComments>
    );
  }
  if (comments.length === 0) {
    return <Styled.NoComment>No comments yet 😢</Styled.NoComment>;
  }
  return (
    <>
      <Styled.Title>{length} Comments</Styled.Title>
      {comments.map((comment) => !comment.text || <Comment key={comment.id} comment={comment} />)}
    </>
  );
}
