import { useEffect, useState } from 'react';
import { fetchStories } from 'src/helpers/api';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { BATCH_AMOUNT } from 'src/helpers/constants';

export default function useStoriesListData() {
  const [stories, setStories] = useState([]);
  const { promiseInProgress: isLoading } = usePromiseTracker();

  function restoreList(restoredStories) {
    setStories(JSON.parse(restoredStories));
    restorePageScroll(sessionStorage.getItem('scrollPosition'));
    sessionStorage.clear();
  }

  function persistList() {
    sessionStorage.setItem('restoredStories', JSON.stringify(stories));
    sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
  }

  useEffect(() => {
    const restoredStories = sessionStorage.getItem('restoredStories');

    restoredStories ? restoreList(restoredStories) : refetch();
  }, []);

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
    persistList,
  };
}

function restorePageScroll(scrollPosition: string) {
  setTimeout(() => {
    window.scrollTo(0, parseInt(scrollPosition));
  }, 0);
}
