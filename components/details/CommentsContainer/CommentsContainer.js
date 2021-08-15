import BeatLoader from 'react-spinners/BeatLoader';
import { fetchComments } from 'api/stories';
import Comment from '../Comment/Comment';
import { useQuery } from 'react-query';
import * as Styled from './styled';
import theme from 'styles/theme';

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
        <BeatLoader color={theme.colors.gray[200]} />
        <Styled.LoadingText>Loading comments</Styled.LoadingText>
      </Styled.LoadingComments>
    );
  }
  if (comments.length === 0) {
    return 'No comments yet';
  }
  return (
    <>
      <Styled.Title>{length} Comments</Styled.Title>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}
