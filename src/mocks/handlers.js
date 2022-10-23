import { rest } from 'msw';
import {
  STORY_DETAILS_URL,
  TOP_STORIES_URL,
  STORY_DETAILS_COMMENTS_URL,
} from 'src/helpers/constants';

const topStoriesMock = rest.get(TOP_STORIES_URL, (_req, res, ctx) => {
  return res(ctx.json(['1']));
});

const storyDetailsMock = rest.get(`${STORY_DETAILS_URL}/1.json`, (_req, res, ctx) => {
  return res(
    ctx.json({
      by: 'bmlw',
      descendants: 3,
      id: 1,
      kids: [2, 3, 4],
      score: 123,
      time: 1659296371,
      title: 'Some title',
      type: 'story',
      url: 'http://some-url.com',
    }),
  );
});

const commentsMock = rest.get(`${STORY_DETAILS_COMMENTS_URL}/1`, (_req, res, ctx) => {
  return res(
    ctx.json({
      children: {
        id: 34385186,
        created_at: '2023-01-14T23:33:03.000Z',
        created_at_i: 1673739183,
        type: 'comment',
        author: 'reverseblade2',
        title: null,
        url: null,
        text: '<p>Perhaps, human technology is needed in order to prevent a catastrophic asteroid impact.</p><p>But life, never puts all eggs into a single basket. And that&#x27;s precisely why we have cockroaches.</p>',
        points: null,
        parent_id: 34383529,
        story_id: 34383529,
        children: [
          {
            id: 34385203,
            created_at: '2023-01-14T23:36:12.000Z',
            created_at_i: 1673739372,
            type: 'comment',
            author: null,
            title: null,
            url: null,
            text: null,
            points: null,
            parent_id: 34385186,
            story_id: 34383529,
            children: [],
            options: [],
          },
        ],
        options: [],
      },
    }),
  );
});

export const handlers = [topStoriesMock, storyDetailsMock, commentsMock];
