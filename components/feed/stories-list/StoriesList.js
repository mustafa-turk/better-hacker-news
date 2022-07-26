import styled from 'styled-components';

import StoryListItem from './StoriesListItem';
import LoadingIndicator from 'components/shared/LoadingIndicator';
import Text from 'components/shared/Text';
import { colors } from 'config';

import useStoriesListData from './useStoriesList';
import { useRouter } from 'next/router';

function StoriesList({ initialData }) {
  const router = useRouter();
  const { stories, isLoading, refetch } = useStoriesListData({ initialData });

  return (
    <Container>
      {stories.map((story) => (
        <StoriesList.Item
          key={story.id}
          story={story}
          onClick={() => router.push(`/${story.id}`)}
        />
      ))}
      <StoriesListLoadButton onClick={refetch}>
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
