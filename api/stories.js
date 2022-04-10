import moment from 'moment';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchTopStoryIds() {
  const TOP_STORY_IDS_URL = `${BASE_URL}/topstories.json`;
  const result = await fetch(TOP_STORY_IDS_URL);
  return await result.json();
}

export async function fetchNewStoryIds() {
  const NEW_STORY_IDS_URL = `${BASE_URL}/newstories.json`;
  const result = await fetch(NEW_STORY_IDS_URL);
  return await result.json();
}

export async function fetchStory(storyId) {
  const STORY_URL = `${BASE_URL}/item`;
  const result = await fetch(`${STORY_URL}/${storyId}.json`);

  const story = await result.json();
  if (story) {
    return {
      ...story,
      domain: story?.url ? new URL(story.url).hostname : null,
      date: moment(new Date(story?.time * 1000)).fromNow(),
    };
  }
  return Promise.reject();
}

export async function fetchComments(storyId) {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  const story = await result.json();
  return story.children;
}
