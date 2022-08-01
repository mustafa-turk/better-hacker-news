import styled from 'styled-components';
import { LinkIcon } from 'components/common/icon';
import { colors } from 'config';

export default function StoryListItem({ story = {}, onClick }) {
  return (
    <div onClick={onClick}>
      <StoryListItemContainer>
        <StoryListItemTitle data-testid="title">{story.title}</StoryListItemTitle>
        {story.domain ? (
          <StoryListItemDomain>
            <StoryListItemDomainIcon /> {story.domain}
          </StoryListItemDomain>
        ) : null}
        <StoryListItemMetaData>
          <span data-testid="comments-count">{story.descendants} comments</span>
          <span>•</span>
          <span data-testid="date">{story.date}</span>
        </StoryListItemMetaData>
      </StoryListItemContainer>
    </div>
  );
}

const StoryListItemContainer = styled.div`
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

const StoryListItemMetaData = styled.div`
  color: ${colors.gray[500]};
  display: flex;
  gap: 8px;
`;
