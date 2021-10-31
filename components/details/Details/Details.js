import { LinkIcon } from 'components/shared/Icon';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import moment from 'moment';
import Comments from '../Comments';

export default function Details({ storyId, story, isLoading }) {
  return (
    <>
      <Header>
        <Title>{isLoading ? <Skeleton /> : story.title}</Title>
        <Source href={story.url} target="_blank" rel="noopener">
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              <LinkIcon size="19px" />
              <div>{story.domain}</div>
            </>
          )}
        </Source>
        <CommentMetaData>
          {isLoading ? <Skeleton /> : moment(new Date(story.time * 1000)).fromNow()}
        </CommentMetaData>
      </Header>
      <Comments storyId={storyId} length={story.descendants} />
    </>
  );
}

const CommentMetaData = styled.div`
  color: ${(p) => p.theme.colors.gray[200]};
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Source = styled.a`
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 10px;
  display: flex;
  svg {
    margin-right: 5px;
  }
`;

const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
`;
