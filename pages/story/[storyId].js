import { fetchComments, fetchStory } from 'api/stories';
import Loader from 'components/shared/Loader';
import Comment from 'components/details/Comment/Comment';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import theme from 'styles/theme';
import Layout from 'components/shared/Layout/Layout';

export default function StoryDetailsPage() {
  const router = useRouter();
  const { storyId } = router.query;
  const {data: story = {}, isLoadingStory} = useQuery(["story", storyId], () => fetchStory(storyId));
  const {data: comments, isLoadingComments} = useQuery(["comments", storyId], () => fetchComments(storyId), { retry: true });

  return (
    <Layout>
      <Head>
        <title>{story.title}</title>
      </Head>
      <Loader isLoading={isLoadingStory}>
        <Header>
          <Title>{story.title}</Title>
          <CommentMetaData>{story.descendants} comments • {moment(new Date(story.time * 1000)).fromNow()}</CommentMetaData>
        </Header>
        <Loader isLoading={isLoadingComments}>
          {comments && comments.length > 0 ? comments.map((comment) => <Comment comment={comment} />) : null}
        </Loader>
      </Loader>
    </Layout>
  )
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