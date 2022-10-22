import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import StoriesListItem, { LoadingStoryListItem } from './stories-list-item';
import LoadingIndicator from 'src/components/common/loading-indicator';
import { Text } from 'src/components/common';
import { colors } from 'theme';

import useStoriesList from './use-stories-list';

import { StoryType } from 'src/helpers/types';
import { BATCH_AMOUNT } from 'src/helpers/constants';

function StoriesList() {
  const router = useRouter();
  const { stories, isLoading, refetch, persistList } = useStoriesList();

  function handleClick(story: StoryType) {
    // NOTE: the list and the scroll position is saved in session storage
    // to load back when the user navigates back to the home page.
    persistList();
    router.push(`/${story.id}`);
  }

  if (isEmpty(stories)) {
    return (
      <Container>
        {[...Array(BATCH_AMOUNT)].map((_, i) => (
          <LoadingStoryListItem key={i} />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      {stories.map((story) => (
        <StoriesListItem key={story.id} story={story} onClick={() => handleClick(story)} />
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
