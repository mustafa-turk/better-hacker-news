import PropagateLoader from 'react-spinners/BeatLoader';
import { fetchComments } from 'api/stories';
import Comment from '../Comment/Comment';
import { useQuery } from 'react-query';
import theme from 'styles/theme';
import * as Styled from './styled';
import { isEmpty } from 'lodash';

export default function CommentsContainer({ storyId }) {
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
        <PropagateLoader color={theme.colors.gray[100]} />
        <Styled.LoadingText>Loading comments</Styled.LoadingText>
      </Styled.LoadingComments>
    );
  }
  if (comments.length === 0) {
    return 'No comments yet';
  }
  return comments.map((comment) => <Comment key={comment.id} comment={comment} />);
}
