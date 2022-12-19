import { rest } from 'msw';

import { testData } from './data/testData';

const handlers = [
  rest.get('/auth/google/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
  rest.post('/api/guest', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
];

export default handlers;
