import moment from "moment";

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchStoryIds() {
  const LATEST_STORY_IDS_URL = `${BASE_URL}/topstories.json`;
  const result = await fetch(LATEST_STORY_IDS_URL);
  return await result.json();
}

export async function fetchStory(storyId) {
  const STORY_URL = `${BASE_URL}/item`;
  const result = await fetch(`${STORY_URL}/${storyId}.json`);
  const story = await result.json();
  return {
    ...story,
    domain: story?.url ? new URL(story.url).hostname : null,
    date: moment(new Date(story?.time * 1000)).fromNow()
  }
}

export async function fetchComments(storyId) {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  const story = await result.json();
  return story.children;
}