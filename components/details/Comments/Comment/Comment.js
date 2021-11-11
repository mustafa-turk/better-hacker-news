import { isEmpty, map } from 'lodash';
import moment from 'moment';
import { useState } from 'react';
import * as Styled from './styled';

export default function Comment({ comment, isNested }) {
  const [hidden, setHidden] = useState(true);

  return (
    <Styled.Container isNested={isNested}>
      <Styled.Author>
        {comment.author} • {moment(new Date(comment.created_at_i * 1000)).fromNow()}
      </Styled.Author>
      <Styled.Content dangerouslySetInnerHTML={{ __html: comment.text }} />
      {isEmpty(comment.children) || (
        <Styled.Button onClick={() => setHidden(hidden ? false : true)}>
          {hidden ? 'Show replies' : 'Hide replies'}
        </Styled.Button>
      )}
      {!hidden &&
        map(comment.children, (nestedComment) => <Comment comment={nestedComment} isNested />)}
    </Styled.Container>
  );
}
