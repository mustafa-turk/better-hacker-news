import styled from 'styled-components';
import { useRouter } from 'next/router';

import StoriesListItem from './stories-list-item';
import LoadingIndicator from 'src/components/common/loading-indicator';
import { Text } from 'src/components/common';
import { colors } from 'theme';

import useStoriesListData from './use-stories-list-data';

function StoriesList({ initialData }) {
  const router = useRouter();
  const { stories, isLoading, refetch } = useStoriesListData({ initialData });

  return (
    <Container>
      {stories.map((story, i) => (
        <StoriesListItem
          key={story.id}
          order={i}
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
  height: 40px;
  &:hover {
    background: ${colors.gray[800]};
    cursor: pointer;
  }
`;

export default StoriesList;
