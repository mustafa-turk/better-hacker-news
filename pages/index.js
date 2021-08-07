import { fetchStory, fetchStoryIds } from "api/stories";
import StoriesContainer from "components/stories/StoriesContainer";
import styled from "styled-components";

export default function HomePage({ initialStories, storyIds }) {
  return (
    <Wrapper>
      <Header><Highlight>(Better)</Highlight> Hacker News</Header>
      <StoriesContainer storyIds={storyIds} initialStories={initialStories} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const storyIds = await fetchStoryIds();
  const initialStories = await Promise.all(storyIds.slice(0, 30).map(storyId => fetchStory(storyId)));
  return { props: { storyIds, initialStories } };
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Highlight = styled.span`
  background: linear-gradient(to bottom, transparent 50%, #7D204D 30%);
  padding: 0 5px;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 28px;
  border-bottom: 1px solid #3c3c3c;
  padding-bottom: 10px;
  text-align:center;
`;