import { useEffect, useReducer } from 'react';
import { StoryType } from 'src/helpers/types';
import { fetchStories } from 'src/helpers/api';
import { BATCH_AMOUNT } from 'src/helpers/constants';

export default function useStoriesListData() {
  const [{ stories, isLoading }, dispatch] = useReducer(reducer, { stories: [], isLoading: false });

  function restoreList(restoredStories: string) {
    dispatch({ type: 'restored', payload: restoredStories });

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

  function refetch() {
    dispatch({ type: 'loading' });
    fetchStories(stories.length, stories.length + BATCH_AMOUNT).then((newStories) => {
      dispatch({ type: 'success', payload: newStories });
    });
  }

  return {
    isLoading,
    stories,
    refetch,
    persistList,
  };
}

const initial = {
  isLoading: false,
  stories: [],
};

type ActionType =
  | { type: 'success'; payload: StoryType[] }
  | { type: 'restored'; payload: string }
  | { type: 'loading' };

function reducer(state: typeof initial, action: ActionType) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'success':
      return {
        isLoading: false,
        stories: [...state.stories, ...action.payload],
      };
    case 'restored':
      return {
        ...state,
        stories: JSON.parse(action.payload),
      };
    default:
      return state;
  }
}

function restorePageScroll(scrollPosition: string) {
  setTimeout(() => {
    window.scrollTo(0, parseInt(scrollPosition));
  }, 0);
}
