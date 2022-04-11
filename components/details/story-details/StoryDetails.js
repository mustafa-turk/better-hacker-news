import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import CommentsContainer from '../comments-container';
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

  const { title, url, time, domain, descendants, by } = story;
  const metadata = `${by} • ${moment(new Date(time * 1000)).fromNow()}`;

  return (
    <ErrorBoundary isError={isError}>
      <Styled.Header>
        <Styled.Title>{isLoading ? <Skeleton /> : title}</Styled.Title>
        <Styled.Source href={url} target="_blank" rel="noopener">
          {isLoading ? (
            <Skeleton />
          ) : domain ? (
            <>
              <LinkIcon size="19px" />
              <div>{domain}</div>
            </>
          ) : null}
        </Styled.Source>
        <Styled.MetaData>{isLoading ? <Skeleton /> : metadata}</Styled.MetaData>
      </Styled.Header>
      <CommentsContainer storyId={storyId} length={descendants} />
    </ErrorBoundary>
  );
}
