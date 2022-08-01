import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Header } from 'components/common';
import { ArrowLeft } from 'components/common/icon';

import MainLayout from 'components/common/layouts/main-layout';
import StoryDetails from 'components/story-details/story-details';

import { fetchStory } from 'helpers/api';

export default function DetailsPage({ details }) {
  const router = useRouter();

  function navigate() {
    router.push('/', undefined, { shallow: true });
  }

  return (
    <MainLayout>
      <Head>
        <title>Hacker News | Stories</title>
      </Head>

      <Header>
        <Button onClick={navigate}>
          <ArrowLeft size={24} />
        </Button>
      </Header>

      <StoryDetails details={details} />
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const { storyId } = ctx.query;
  const details = await fetchStory(storyId);

  return { props: { details } };
}
