import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import CommentsContainer from '../CommentsContainer';
import { LinkIcon } from 'components/shared/Icon';
import * as Styled from './styled';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { fetchStory } from 'api/stories';
import ErrorBoundary from 'components/shared/ErrorBoundary';

export default function StoryDetails({ storyId }) {
  const {
    data: story = {},
    isLoading,
    refetch,
    isError,
  } = useQuery([storyId], ({ queryKey: storyId }) => fetchStory(storyId), {
    manual: true,
    retry: false,
  });

  useEffect(() => {
    refetch(storyId);
  }, [refetch, storyId]);

  return (
    <ErrorBoundary isError={isError}>
      <Styled.Header>
        <Styled.Title>{isLoading ? <Skeleton /> : story.title}</Styled.Title>
        <Styled.Source href={story.url} target="_blank" rel="noopener">
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              <LinkIcon size="19px" />
              <div>{story.domain}</div>
            </>
          )}
        </Styled.Source>
        <Styled.MetaData>
          {isLoading ? <Skeleton /> : moment(new Date(story.time * 1000)).fromNow()}
        </Styled.MetaData>
      </Styled.Header>
      <CommentsContainer storyId={storyId} length={story.descendants} />
    </ErrorBoundary>
  );
}
