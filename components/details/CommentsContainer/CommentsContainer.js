import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { fetchComments } from 'api/stories';
import * as Styled from './styled';
import { useState } from 'react';
import moment from 'moment';
import { isEmpty, map } from 'lodash';

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

function Comment({ comment, isNested }) {
  const [hidden, setHidden] = useState(false);

  return (
    <Styled.Container isNested={isNested}>
      <Styled.Author>
        {comment.author} • {moment(new Date(comment.created_at_i * 1000)).fromNow()}
      </Styled.Author>
      <Styled.Content dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || (
        <Styled.Button onClick={() => setHidden(!hidden)}>
          {hidden ? 'Show replies' : 'Hide replies'}
        </Styled.Button>
      )}
      {!hidden &&
        map(comment.children, (nestedComment) => <Comment comment={nestedComment} isNested />)}
    </Styled.Container>
  );
}
