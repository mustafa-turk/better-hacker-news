import moment from 'moment';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORY_IDS_URL = `${BASE_URL}/topstories.json`;
const NEW_STORY_IDS_URL = `${BASE_URL}/newstories.json`;

export async function fetchStoryIds({ mode }) {
  let result;
  switch (mode) {
    case 'new':
      result = await fetch(NEW_STORY_IDS_URL);
      break;
    default:
      result = await fetch(TOP_STORY_IDS_URL);
      break;
  }
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

export async function fetchStories({ storyIds, from, to }) {
  const stories = await Promise.all(storyIds.slice(from, to).map((storyId) => fetchStory(storyId)));
  return stories;
}

export async function fetchComments(storyId) {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  const story = await result.json();
  return story.children;
}
