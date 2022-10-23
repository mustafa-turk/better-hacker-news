import moment from 'moment';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { LinkIcon } from 'src/components/common/icon';
import { colors } from 'theme';
import { Box } from 'src/components/common';

interface Props {
  story: {
    title?: string;
    domain?: string;
    by?: string;
    time?: number;
  };
  onClick: Function;
}

export default function StoryListItem({ story = {}, onClick }: Props) {
  const metadata = `${story.by} • ${moment(new Date(story.time * 1000)).fromNow()}`;

  return (
    <StoryListItemContainer onClick={onClick}>
      <StoryListItemDetails>
        <StoryListItemTitle data-testid="title">{story.title}</StoryListItemTitle>
        <Box color={colors.gray[500]}>{metadata}</Box>
      </StoryListItemDetails>
    </StoryListItemContainer>
  );
}

export function LoadingStoryListItem() {
  return (
    <StoryListItemContainer>
      <StoryListItemDetails>
        <StoryListItemTitle data-testid="title">
          <Skeleton width="80%" />
        </StoryListItemTitle>

        <Skeleton width="50%" />
      </StoryListItemDetails>
    </StoryListItemContainer>
  );
}

const StoryListItemContainer = styled.div``;

const StoryListItemDetails = styled.div`
  cursor: pointer;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
  opacity: 0.8;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const StoryListItemTitle = styled.p`
  font-size: 18px;
`;

const StoryListItemDomain = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray[200]};
`;

const StoryListItemDomainIcon = styled(LinkIcon)`
  margin-right: 5px;
  color: ${colors.gray[200]};
`;
