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
        descendants: 58,
        id: 32298137,
        kids: [32298786, 32298803, 32298406],
        score: 143,
        time: 1659296371,
        title: 'Some title',
        type: 'story',
        url: 'https://bret.dk/raspberry-pi-zero-vs-mangopi-mq-pro-benchmarks/',
      }),
    );
  }),
];
