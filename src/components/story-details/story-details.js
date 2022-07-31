import moment from 'moment';
import styled from 'styled-components';

import { colors } from 'config';

import { Box } from 'components/common';
import { LinkIcon } from 'components/common/icon';

import CommentsContainer from 'components/story-details/comments-container';

export default function StoryDetails({ details: story }) {
  const metadata = `${story.by} • ${moment(new Date(story.time * 1000)).fromNow()}`;

  return (
    <>
      <Header>
        <Title>{story.title}</Title>
        <Source href={story.url} target="_blank" rel="noopener">
          {story.domain ? (
            <>
              <LinkIcon size="19px" />
              <div>{story.domain}</div>
            </>
          ) : null}
        </Source>
        <Box color={colors.gray[500]}>{metadata}</Box>
      </Header>
      <CommentsContainer storyId={story.id} length={story.descendants} />
    </>
  );
}

export const Header = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.gray[800]};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 28px;
`;

export const Source = styled.a`
  color: ${colors.blue[500]};
  display: flex;
  gap: 5px;
`;
