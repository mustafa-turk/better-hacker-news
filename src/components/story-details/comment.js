import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import { isEmpty, map } from 'lodash';
import { colors } from 'config';
import { CollapseIcon, ExpandIcon } from 'components/common/icon';

export default function Comment({ comment, isNested }) {
  const [hidden, setHidden] = useState(true);

  if (!comment.text) {
    return (
      <Container isNested={isNested}>
        <CommentDeletedText>This comment is deleted</CommentDeletedText>
      </Container>
    );
  }

  return (
    <Container isNested={isNested}>
      <CommentAuthor>
        {comment.author} • {moment(new Date(comment.created_at_i * 1000)).fromNow()}
      </CommentAuthor>
      <CommentText dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || (
        <CommentButton onClick={() => setHidden(!hidden)}>
          {hidden ? <ExpandIcon /> : <CollapseIcon />}
          {hidden ? `Show replies` : 'Hide replies'}
        </CommentButton>
      )}
      {!hidden &&
        map(comment.children, (nestedComment) => <Comment comment={nestedComment} isNested />)}
    </Container>
  );
}

const Container = styled.div`
  border-left: 2px solid ${(p) => (p.isNested ? colors.gray[600] : colors.blue[500])};
  padding-left: 20px;
  margin-right: 10px;
  overflow: scroll;
  width: 100%;
  margin-top: ${(p) => (p.isNested ? '20px' : '0')};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentDeletedText = styled.p`
  color: ${colors.gray[600]};
  font-style: italic;
`;

const CommentAuthor = styled.div`
  color: ${colors.gray[500]};
  margin-bottom: 10px;
`;

const CommentButton = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  background: ${colors.gray[900]};
  border: 1px solid ${colors.gray[800]};
  color: ${colors.gray[300]};
  cursor: pointer;
  font-size: 14px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    background: ${colors.gray[800]};
  }
`;

const CommentText = styled.div`
  p {
    margin-bottom: 20px !important;
  }
  p:last-child {
    margin-bottom: 0px !important;
  }
  a:link {
    padding: 0 2px;
    border-radius: 1px;
    color: ${colors.blue[500]};
  }
  color: ${colors.gray[100]};
`;
