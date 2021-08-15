import { useState, useEffect } from 'react';
import { BATCH_AMOUNT } from 'utils/constants';
import { debounce } from 'utils/debounce';

const MAX_STORIES = 500;
export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(BATCH_AMOUNT);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + BATCH_AMOUNT >= MAX_STORIES) {
      setCount(MAX_STORIES);
      setHasReachedEnd(true);
    } else {
      setCount(count + BATCH_AMOUNT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count, loading, hasReachedEnd };
};
