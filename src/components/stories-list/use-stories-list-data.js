import { useState } from 'react';
import { fetchStories } from 'src/helpers/api';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

const BATCH_AMOUNT = 30;

export default function useStoriesListData({ initialData }) {
  const [stories, setStories] = useState(initialData);
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
