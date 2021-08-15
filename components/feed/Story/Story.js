import Link from 'next/link';
import * as Styled from './styled';

export default function Story({ story = {} }) {
  return (
    <Link href={`/story/${story.id}`} scroll={false}>
      <Styled.Container>
        <Styled.Title>{story.title}</Styled.Title>
        {story.domain ? (
          <Styled.Domain>
            <Styled.LinkIcon /> {story.domain}
          </Styled.Domain>
        ) : null}
        <Styled.Details>
          <Styled.CommentsCount>{story.descendants} comments</Styled.CommentsCount>
          <span>•</span>
          <span>{story.date}</span>
        </Styled.Details>
      </Styled.Container>
    </Link>
  );
}
