import moment from 'moment';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { fetchStory } from 'api/stories';
import { colors } from 'config';

import CommentsContainer from 'components/details/comments-container/CommentsContainer';
import ErrorBoundary from 'components/shared/ErrorBoundary';
import { LinkIcon } from 'components/shared/Icon';
import Skeleton from 'components/shared/Skeleton';

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
  }, [storyId]);

  const { title, url, time, domain, descendants, by } = story;
  const metadata = `${by} • ${moment(new Date(time * 1000)).fromNow()}`;

  return (
    <ErrorBoundary isError={isError}>
      <StoryDetailsHeader>
        <StoryDetailsTitle>{isLoading ? <Skeleton /> : title}</StoryDetailsTitle>
        <StoryDetailsSource href={url} target="_blank" rel="noopener">
          {isLoading ? (
            <Skeleton />
          ) : domain ? (
            <>
              <LinkIcon size="19px" />
              <div>{domain}</div>
            </>
          ) : null}
        </StoryDetailsSource>
        <StoryDetailsMetaData>{isLoading ? <Skeleton /> : metadata}</StoryDetailsMetaData>
      </StoryDetailsHeader>
      <CommentsContainer storyId={storyId} length={descendants} />
    </ErrorBoundary>
  );
}

export const StoryDetailsHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${colors.gray[800]};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StoryDetailsTitle = styled.h1`
  font-weight: 900;
  font-size: 28px;
`;

export const StoryDetailsSource = styled.a`
  color: ${colors.blue[500]};
  display: flex;
  svg {
    margin-right: 5px;
  }
`;

export const StoryDetailsMetaData = styled.div`
  color: ${colors.gray[500]};
`;
