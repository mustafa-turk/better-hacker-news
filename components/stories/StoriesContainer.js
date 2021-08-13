import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import { fetchStory } from "api/stories";
import theme from "styles/theme";
import { BiMessageDots, BiLink } from "react-icons/bi";

export default function StoriesContainer({ initialStories, storyIds }) {
  const { count, hasReachedEnd } = useInfiniteScroll();
  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    if (count > 30) {
      async function fetchStories() {
        const newStories = await Promise.all(storyIds.slice(count, count + 30).map(storyId => fetchStory(storyId)));
        setStories([...stories, ...newStories]);
      }
      fetchStories();
    }
  }, [count]);

  return (
    <>
      {stories.map((story, index) => <Story key={story.id} story={story} index={index} />)}
      {hasReachedEnd || <Loading>Loading more stories...</Loading>}
    </>
  );
}

function Story({ story = {} }) {
  return (
    <Link href={`/story/${story.id}`} scroll={false}>
      <Wrapper>
        <Title>{story.title}</Title>
        <Domain><LinkIcon /> {story.domain}</Domain>
        <Details>
          <CommentsCount>{story.descendants} comments</CommentsCount>
          <span>•</span>
          <span>{story.date}</span>
        </Details>
      </Wrapper>
    </Link>
  );
}

const Loading = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  border: 1px solid ${theme.colors.gray[100]};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-top: 4px;
  font-family: Inter;
`;

const Details = styled.div`
  color: #686868;
  margin-top: 5px;
  span {
    margin-right: 10px;
  }
  margin-top: 20px;
`

const LinkIcon = styled(BiLink)`
  margin-right: 5px;
  color: ${theme.colors.gray[200]};
`

const Domain = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.gray[200]};
`

const CommentsCount = styled.span`
  color: #C6C6C6;
`
