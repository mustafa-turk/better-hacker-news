import { fetchComments, fetchStory } from 'api/stories';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from 'styled-components';

export default function StoryDetailsPage() {
  const router = useRouter();
  const { storyId } = router.query;
  const {data: story, isLoadingStory} = useQuery(["story", storyId], () => fetchStory(storyId));
  const {data: comments, isLoadingComments} = useQuery(["comments", storyId], () => fetchComments(storyId), { retry: true });

  if (isLoadingStory) return "loading...";
  return (
    <Wrapper>
      <Head>
        <title>{story?.title}</title>
      </Head>
      <Header>{story?.title}</Header>
      {comments && comments.length > 0 ? comments.map((comment) => <Comment comment={comment} />) : null}
    </Wrapper>
  )
}

function Comment({ comment }) {
  return (
    <div style={{ borderLeft: "1px solid #3c3c3c", marginLeft: "10px", width: "100%" }}>
      <div style={{ margin: "10px" }}>
        <div>{comment.author} • {}</div>
        <div dangerouslySetInnerHTML={{ __html: comment.text }} />
        {comment.children ? comment.children.map((nestedComment) => <Comment comment={nestedComment} />) : null}
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 28px;
  border-bottom: 1px solid #3c3c3c;
  padding-bottom: 10px;
  text-align:center;
`;