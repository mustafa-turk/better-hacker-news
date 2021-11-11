import { useEffect, useState } from 'react';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { fetchStory } from 'api/stories';
import * as Styled from './styled';

export default function StoriesList({ initialStories, storyIds, children }) {
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
    <div>
      {children(stories)}
      {hasReachedEnd || <Styled.Loading>Loading more stories...</Styled.Loading>}
    </div>
  );
}
