import { useEffect, useState } from 'react';
import { fetchStories } from 'api/stories';
import * as Styled from './styled';

import { BATCH_AMOUNT } from 'utils/constants';

function StoriesList({ initialStories, storyIds, children }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(initialStories);
  }, [initialStories]);

  async function getStories() {
    const newStories = await fetchStories({
      storyIds,
      from: stories.length,
      to: stories.length + BATCH_AMOUNT,
    });
    setStories((prevStories) => [...prevStories, ...newStories]);
  }

  return (
    <>
      {children(stories)}
      <Styled.LoadButton onClick={getStories}>Load More</Styled.LoadButton>
    </>
  );
}

function StoryListItem({ story = {}, onClick }) {
  return (
    <div onClick={onClick}>
      <Styled.Comment>
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

StoriesList.Item = StoryListItem;

export default StoriesList;
