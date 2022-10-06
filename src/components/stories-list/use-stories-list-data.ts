import { useState } from 'react';
import { fetchStories } from 'src/helpers/api';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

const BATCH_AMOUNT = 30;

export interface Props {
  initialData: {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
  }[];
}

export default function useStoriesListData({ initialData }: Props) {
  const [stories, setStories] = useState(initialData);
  const { promiseInProgress: isLoading } = usePromiseTracker();

  async function refetch() {
    trackPromise(
      fetchStories(stories.length, stories.length + BATCH_AMOUNT).then((newStories) =>
        setStories((prevStories) => [...prevStories, ...newStories]),
      ),
    );
  }

  return {
    isLoading,
    stories,
    refetch,
  };
}
