import moment from "moment";

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchStoryIds() {
  const LATEST_STORY_IDS_URL = `${BASE_URL}/newstories.json`;
  const result = await fetch(LATEST_STORY_IDS_URL);
  return await result.json();
}

export async function fetchStory(storyId) {
  const STORY_URL = `${BASE_URL}/item`;
  const result = await fetch(`${STORY_URL}/${storyId}.json`);
  const story = await result.json();
  return {
    ...story,
    domain: story?.url ? new URL(story.url).hostname : undefined,
    date: moment(new Date(story?.time * 1000)).fromNow()
  }
}