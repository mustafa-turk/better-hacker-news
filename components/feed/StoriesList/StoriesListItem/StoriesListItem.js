import * as Styled from './styled';

export default function StoryListItem({ story = {}, onClick }) {
  return (
    <div onClick={onClick}>
      <Styled.Container>
        <Styled.Title>{story.title}</Styled.Title>
        {story.domain ? (
          <Styled.Domain>
            <Styled.DomainIcon /> {story.domain}
          </Styled.Domain>
        ) : null}
        <Styled.Details>
          <Styled.CommentsCount>{story.descendants} comments</Styled.CommentsCount>
          <span>•</span>
          <span>{story.date}</span>
        </Styled.Details>
      </Styled.Container>
    </div>
  );
}
