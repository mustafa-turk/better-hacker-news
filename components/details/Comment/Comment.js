import { isEmpty, map } from 'lodash';
import { useState } from 'react';
import * as Styled from "./styled";

export default function Comment({ comment }) {
  const [hidden, setHidden] = useState(true);

  return (
    <Styled.Container>
      <Styled.Author>{comment.author}</Styled.Author>
      <Styled.Content dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || <Styled.Button onClick={() => setHidden(hidden ? false : true)}>{hidden ? "Show all replies" : "Hide all replies"}</Styled.Button>}
      {!hidden && map(comment.children, (nestedComment) => <NestedComment comment={nestedComment} />)}
    </Styled.Container>
  )
}

function NestedComment({ comment }) {
  const [hidden, setHidden] = useState(true);

  return (
    <Styled.NestedContainer>
      <Styled.Author>{comment.author}</Styled.Author>
      <Styled.Content dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || <Styled.Button onClick={() => setHidden(hidden ? false : true)}>{hidden ? "Show all replies" : "Hide all replies"}</Styled.Button>}
      {!hidden && map(comment.children, (nestedComment) => <NestedComment comment={nestedComment} />)}
    </Styled.NestedContainer>
  )
}