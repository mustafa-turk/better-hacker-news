import Skeleton from 'react-loading-skeleton';
import { fetchStory } from 'api/stories';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import theme from 'styles/theme';
import Layout from 'components/shared/Layout/Layout';
import CommentsContainer from 'components/details/CommentsContainer';

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
          <CommentMetaData>
            {isLoading ? (
              <Skeleton />
            ) : (
              `${story.descendants} comments • ${moment(new Date(story.time * 1000)).fromNow()}`
            )}
          </CommentMetaData>
        </Header>
        <CommentsContainer storyId={storyId} />
      </>
    </Layout>
  );
}

const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 10px;
`;

const CommentMetaData = styled.div`
  color: ${theme.colors.gray[200]};
`;
