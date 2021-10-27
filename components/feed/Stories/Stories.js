import { useEffect, useState } from 'react';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { fetchStory } from 'api/stories';
import * as Styled from './styled';
import Story from './Story';

export default function StoriesContainer({ initialStories, storyIds }) {
  const { count, hasReachedEnd } = useInfiniteScroll();
  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    if (count > 30) {
      async function fetchStories() {
        const newStories = await Promise.all(
          storyIds.slice(count, count + 30).map((storyId) => fetchStory(storyId)),
        );
        setStories((prevStories) => [...prevStories, ...newStories]);
      }
      fetchStories();
    }
  }, [storyIds, count]);

  return (
    <>
      {stories.map((story, index) => (
        <Story key={story.id} story={story} index={index} />
      ))}
      {hasReachedEnd || <Styled.Loading>Loading more stories...</Styled.Loading>}
    </>
  );
}
