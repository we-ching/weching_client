import { rest } from 'msw';
import { testData } from './data/testData';

const handlers = [
  rest.get('/post/api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
  rest.post('post/api/register', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(res));
  }),
  rest.get('/api/post', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
  // rest.get('/api/review/:id', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(getRandomPost));
  // }),
  rest.patch('/api/review/write/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req));
  }),
];

export default handlers;
