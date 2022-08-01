import moment from 'moment';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchStoryIds() {
  const result = await fetch(`${BASE_URL}/topstories.json`);

  return await result.json();
}

export async function fetchStory(storyId) {
  const result = await fetch(`${BASE_URL}/item/${storyId}.json`);

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
  const storyIds = await fetchStoryIds();
  const stories = await Promise.all(storyIds.slice(from, to).map((storyId) => fetchStory(storyId)));

  return stories;
}

export async function fetchComments(storyId) {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  const story = await result.json();

  return story.children;
}
