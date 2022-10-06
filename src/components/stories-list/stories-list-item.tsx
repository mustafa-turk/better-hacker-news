import styled, { keyframes } from 'styled-components';
import { LinkIcon } from 'src/components/common/icon';
import { colors } from 'theme';

interface Props {
  story: {
    title?: string;
    domain?: string;
  };
  onClick: Function;
  order: number;
}

export default function StoryListItem({ story = {}, onClick, order }: Props) {
  return (
    <StoryListItemContainer onClick={onClick} order={order}>
      <StoryListItemDetails>
        <StoryListItemTitle data-testid="title">{story.title}</StoryListItemTitle>
        {story.domain ? (
          <StoryListItemDomain>
            <StoryListItemDomainIcon /> {story.domain}
          </StoryListItemDomain>
        ) : null}
      </StoryListItemDetails>
    </StoryListItemContainer>
  );
}

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StoryListItemContainer = styled.div`
  animation: ${fade} ${(p) => 0.25 * p.order}s;
`;

const StoryListItemDetails = styled.div`
  cursor: pointer;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
