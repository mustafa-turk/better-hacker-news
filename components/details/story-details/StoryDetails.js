import moment from 'moment';
import styled from 'styled-components';
import { colors } from 'config';

import CommentsContainer from 'components/details/comments-container/CommentsContainer';
import ErrorBoundary from 'components/shared/ErrorBoundary';
import { LinkIcon } from 'components/shared/Icon';
import Skeleton from 'components/shared/Skeleton';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import { ArrowLeft } from 'components/shared/Icon';

import useStoryDetails from './useStoryDetails';
import { useRouter } from 'next/router';
import useWindowSize from 'hooks/useWindowDimensions';

export default function StoryDetails({ storyId }) {
  const router = useRouter();
  const { isDesktop } = useWindowSize();
  const { story, isLoading, isError } = useStoryDetails({ storyId });
  const metadata = `${story.by} • ${moment(new Date(story.time * 1000)).fromNow()}`;

  if (!storyId) return null;

  function navigateHome() {
    router.push('/', undefined, { shallow: true });
  }

  return (
    <ErrorBoundary isError={isError}>
      <Box mb={3} display={isDesktop ? 'none' : 'block'}>
        <Button onClick={navigateHome}>
          <ArrowLeft size={24} />
        </Button>
      </Box>

      <StoryDetailsHeader>
        <StoryDetailsTitle>{isLoading ? <Skeleton /> : story.title}</StoryDetailsTitle>
        <StoryDetailsSource href={story.url} target="_blank" rel="noopener">
          {isLoading ? (
            <Skeleton />
          ) : story.domain ? (
            <>
              <LinkIcon size="19px" />
              <div>{story.domain}</div>
            </>
          ) : null}
        </StoryDetailsSource>
        <Box color={colors.gray[500]}>{isLoading ? <Skeleton /> : metadata}</Box>
      </StoryDetailsHeader>
      <CommentsContainer storyId={storyId} length={story.descendants} />
    </ErrorBoundary>
  );
}

export const StoryDetailsHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
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
  gap: 5px;
`;
