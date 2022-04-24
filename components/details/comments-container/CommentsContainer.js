import { useQuery } from 'react-query';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { fetchComments } from 'api/stories';
import Comment from './Comment';

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
      <>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="70%" />
      </>
    );
  }
  if (!comments || comments.length === 0) {
    return <CommentsContainerEmptyText>Nothing yet 😢</CommentsContainerEmptyText>;
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

const CommentsContainerEmptyText = styled.p`
  color: ${(p) => p.theme.colors.gray[600]};
`;
