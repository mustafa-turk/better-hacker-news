import Skeleton from 'react-loading-skeleton';
import { fetchStory } from 'api/stories';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Layout from 'components/shared/Layout/Layout';
import Comments from 'components/details/Comments';
import { LinkIcon } from 'components/shared/Icon';

export default function StoryDetailsPage() {
  const router = useRouter();
  const { storyId } = router.query;
  const { data: story = {}, isLoading } = useQuery(['story', storyId], () => fetchStory(storyId));
  return (
    <Layout>
      <Head>
        <title>{story.title}</title>
      </Head>
      <>
        <Header>
          <Title>{isLoading ? <Skeleton /> : story.title}</Title>
          <Source href={story.url} target="_blank" rel="noopener">
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                <LinkIcon size="19px" />
                <div>{story.domain}</div>
              </>
            )}
          </Source>
          <CommentMetaData>
            {isLoading ? <Skeleton /> : moment(new Date(story.time * 1000)).fromNow()}
          </CommentMetaData>
        </Header>
        <Comments storyId={storyId} length={story.descendants} />
      </>
    </Layout>
  );
}

const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const Source = styled.a`
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 10px;
  display: flex;
  svg {
    margin-right: 5px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 10px;
`;

const CommentMetaData = styled.div`
  color: ${(p) => p.theme.colors.gray[200]};
`;
