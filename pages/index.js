import { fetchStory, fetchStoryIds } from "api/stories";
import StoriesContainer from "components/stories/StoriesContainer";
import Head from "next/head";
import styled from "styled-components";

export default function HomePage({ initialStories, storyIds }) {
  return (
    <Wrapper>
      <Head>
        <title>Better Hacker News | New stories</title>
      </Head>
      <Header>Hacker News</Header>
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
  max-width: 760px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 24px;
  padding-bottom: 10px;
`;