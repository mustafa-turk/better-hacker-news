import { isEmpty, map } from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

export default function Comment({ comment }) {
  const [hidden, setHidden] = useState(true);

  return (
    <Wrapper>
      <Author>{comment.author}</Author>
      <CommentContent dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || <Button onClick={() => setHidden(hidden ? false : true)}>{hidden ? "Show all replies" : "Hide all replies"}</Button>}
      {!hidden && map(comment.children, (nestedComment) => <NestedComment comment={nestedComment} />)}
    </Wrapper>
  )
}

function NestedComment({ comment }) {
  const [hidden, setHidden] = useState(true);

  return (
    <NestedWrapper>
      <Author>{comment.author}</Author>
      <CommentContent dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || <Button onClick={() => setHidden(hidden ? false : true)}>{hidden ? "Show all replies" : "Hide all replies"}</Button>}
      {!hidden && map(comment.children, (nestedComment) => <NestedComment comment={nestedComment} />)}
    </NestedWrapper>
  )
}

const NestedWrapper = styled.div`
  border-left: 2px solid #212328;
  padding-left: 20px;
  margin-right: 10px;
  font-family: 'Roboto Mono', monospace;
  overflow-wrap: break-word;
  width: 100%;
  margin-top: 20px;
  `;

  const Wrapper = styled.div`
  border-left: 2px solid ${theme.colors.accent};
  padding-left: 20px;
  margin-right: 10px;
  font-family: 'Roboto Mono', monospace;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Author = styled.div`
  color: ${theme.colors.gray[200]};
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  p {
    margin-bottom: 20px !important;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  background: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[200]};
  cursor: pointer;
  // margin: 0 0 10px;
  font-size: 14px;
`