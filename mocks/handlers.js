import { rest } from 'msw';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const handlers = [
  rest.get(`${BASE_URL}/topstories.json`, (_req, res, ctx) => {
    return res(ctx.json(['1']));
  }),
  rest.get(`${BASE_URL}/item/1.json`, (_req, res, ctx) => {
    return res(
      ctx.json({
        by: 'bmlw',
        descendants: 58,
        id: 32298137,
        kids: [
          32298786, 32298803, 32298406, 32298385, 32298423, 32298401, 32298981, 32299687, 32298202,
          32298805, 32299038,
        ],
        score: 143,
        time: 1659296371,
        title: 'RISC-V based single board computers are getting there',
        type: 'story',
        url: 'https://bret.dk/raspberry-pi-zero-vs-mangopi-mq-pro-benchmarks/',
      }),
    );
  }),
];
