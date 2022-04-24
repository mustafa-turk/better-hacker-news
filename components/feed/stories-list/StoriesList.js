import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchStories } from 'api/stories';

import { BATCH_AMOUNT } from 'utils/constants';

import StoryListItem from './StoriesListItem';
import LoadingIndicator from 'components/shared/LoadingIndicator';
import Text from 'components/shared/Text';
import { colors } from 'config';

function StoriesList({ initialStories, storyIds, children }) {
  const [stories, setStories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setStories(initialStories);
  }, [initialStories]);

  async function getStories() {
    setLoading(true);
    const newStories = await fetchStories({
      storyIds,
      from: stories.length,
      to: stories.length + BATCH_AMOUNT,
    });
    setLoading(false);
    setStories((prevStories) => [...prevStories, ...newStories]);
  }

  return (
    <Container>
      {children(stories)}
      <StoriesListLoadButton onClick={getStories}>
        {isLoading ? <LoadingIndicator /> : <Text>More stories</Text>}
      </StoriesListLoadButton>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StoriesListLoadButton = styled.button`
  background: ${colors.gray[900]};
  border: 1px solid ${colors.gray[800]};
  color: ${colors.gray[300]};
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 40px;
  &:hover {
    background: ${colors.gray[800]};
    cursor: pointer;
  }
`;

StoriesList.Item = StoryListItem;

export default StoriesList;
