import { useEffect, useState } from 'react';
import { useInfiniteScroll } from 'components/feed/stories-list/useInfiniteScroll';
import { fetchStory } from 'api/stories';
import * as Styled from './styled';
import useWindowSize from 'hooks/useWindowDimensions';

export default function StoriesList({ initStories, storyIds, children }) {
  const { count, hasReachedEnd } = useInfiniteScroll();
  const [stories, setStories] = useState(initStories);

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

  useEffect(() => {
    setStories(initStories);
  }, [initStories]);

  return (
    <div>
      {children(stories)}
      {hasReachedEnd || <Styled.Loading>Loading more stories...</Styled.Loading>}
    </div>
  );
}

export function StoryListItem({ story = {}, onClick, isActive }) {
  const { isMobile } = useWindowSize();
  return (
    <div onClick={onClick}>
      <Styled.Comment isActive={isActive && !isMobile}>
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
      </Styled.Comment>
    </div>
  );
}
