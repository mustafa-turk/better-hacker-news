import moment from 'moment';
import styled from 'styled-components';

import { colors } from 'theme';

import { Box, Heading } from 'src/components/common';
import { LinkIcon } from 'src/components/common/icon';

import CommentsContainer from 'src/components/story-details/comments-container';

type Story = {
  details: {
    by: string;
    date: string;
    descendants: number;
    domain: string;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: 'story';
    url: string;
  };
};

export default function StoryDetails({ details }: Story) {
  const metadata = `${details.by} • ${moment(new Date(details.time * 1000)).fromNow()}`;

  return (
    <>
      <Header>
        <Heading>{details.title}</Heading>
        <Source href={details.url} target="_blank" rel="noopener">
          {details.domain ? (
            <>
              <LinkIcon size="19px" />
              <div>{details.domain}</div>
            </>
          ) : null}
        </Source>
        <Box color={colors.gray[500]}>{metadata}</Box>
      </Header>
      <CommentsContainer storyId={details.id} />
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

export const Source = styled.a`
  color: ${colors.blue[500]};
  display: flex;
  gap: 5px;
`;
