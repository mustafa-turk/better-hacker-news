import styled from "styled-components";
import Link from "next/link";

export default function Story({ story = {} }) {
  return (
    <Link href={`/story/${story.id}`} scroll={false}>
      <Wrapper>
          <Title>{story.title}</Title>
          <Details>{story.domain} • {story.date} • {story.descendants} comments</Details>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  margin: 30px 0;
  color: white;
`;

const Title = styled.p`
  font-size: 21px;
  font-weight: 500;
`;

const Details = styled.p`
  color: #686868;
`