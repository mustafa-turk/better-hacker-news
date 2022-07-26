import moment from 'moment';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORY_IDS_URL = `${BASE_URL}/topstories.json`;

export async function fetchStoryIds() {
  const result = await fetch(TOP_STORY_IDS_URL);
  return await result.json();
}

export async function fetchStory(storyId: String) {
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

export async function fetchStories({ from, to }) {
  console.log(from, to);
  const storyIds = await fetchStoryIds();
  const stories = await Promise.all(storyIds.slice(from, to).map((storyId) => fetchStory(storyId)));
  return stories;
}

export async function fetchComments(storyId: String) {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  const story = await result.json();
  return story.children;
}
