import { useState } from 'react';
import { fetchStories } from 'api/stories';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { useRouter } from 'next/router';

const BATCH_AMOUNT = 30;

export default function useStoriesListData({ initialData }) {
  const [stories, setStories] = useState(initialData);
  const router = useRouter();
  const { promiseInProgress: isLoading } = usePromiseTracker();

  async function refetch() {
    trackPromise(
      fetchStories({
        from: stories.length,
        to: stories.length + BATCH_AMOUNT,
      }).then((newStories) => setStories((prevStories) => [...prevStories, ...newStories])),
    );
  }

  return {
    isLoading,
    stories,
    refetch,
  };
}
