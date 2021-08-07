import { useEffect, useState } from "react";
import styled from "styled-components";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import Story from './Story';
import { fetchStory } from "api/stories";

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
      {stories.map((story) => <Story key={story.id} story={story} />)}
      {hasReachedEnd || <Loading>Loading more stories...</Loading>}
    </>
  );
}

const Loading = styled.div`
  text-align: center;
`;
