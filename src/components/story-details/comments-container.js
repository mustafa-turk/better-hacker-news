import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import Comment from './comment';
import { colors } from 'theme';
import useCommentsData from './use-comments-data';

export default function CommentsContainer({ storyId }) {
  const { isLoading, isEmpty, comments } = useCommentsData(storyId);

  if (isLoading) {
    return (
      <>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="70%" />
      </>
    );
  }

  if (isEmpty) {
    return <EmptyText>It is quite here 😢</EmptyText>;
  }

  return (
    <Container>
      {comments.map((comment) => !comment.text || <Comment key={comment.id} comment={comment} />)}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EmptyText = styled.p`
  color: ${colors.gray[600]};
`;
