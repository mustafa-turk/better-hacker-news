import styled from "styled-components";

export default function Story({ story = {} }) {
  return (
    <a href={story.url} target="_blank" rel="noopener noreferrer">
      <Wrapper>
          <Title>{story.title}</Title>
          <Details>{story.domain} • {story.date} • {story.descendants} comments</Details>
      </Wrapper>
    </a>
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