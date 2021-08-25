import { debounce } from 'lodash';
import { useState, useEffect } from 'react';
import { BATCH_AMOUNT } from 'utils/constants';

const MAX_STORIES = 500;
export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(BATCH_AMOUNT);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const handleScroll = debounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading) {
      setLoading(true);
    }
    return false;
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
  }, [loading, count]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { count, loading, hasReachedEnd };
};
