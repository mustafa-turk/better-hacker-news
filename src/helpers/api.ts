import moment from 'moment';

import { CommentType } from './types';
import { STORY_DETAILS_COMMENTS_URL, STORY_DETAILS_URL, TOP_STORIES_URL } from './constants';

interface StoryDetails {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export async function fetchStoryIds(): Promise<number[]> {
  const result = await fetch(TOP_STORIES_URL);

  return await result.json();
}

export async function fetchStory(storyId: number): Promise<StoryDetails> {
  const result = await fetch(`${STORY_DETAILS_URL}/${storyId}.json`);

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

export async function fetchStories(from: number, to: number): Promise<StoryDetails[]> {
  const storyIds = await fetchStoryIds();
  const stories = await Promise.all(storyIds.slice(from, to).map((storyId) => fetchStory(storyId)));

  return stories;
}

export async function fetchComments(storyId: number): Promise<CommentType[]> {
  const result = await fetch(`${STORY_DETAILS_COMMENTS_URL}/${storyId}`);
  const story = await result.json();

  return story.children;
}
