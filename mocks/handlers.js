import { rest } from 'msw';
import { STORY_DETAILS_URL, TOP_STORIES_URL } from 'helpers/constants';

export const handlers = [
  rest.get(TOP_STORIES_URL, (_req, res, ctx) => {
    return res(ctx.json(['1']));
  }),
  rest.get(`${STORY_DETAILS_URL}/1.json`, (_req, res, ctx) => {
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
  }),
];
