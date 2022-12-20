import { rest } from 'msw';
import { advice, getRandomPost, testData, main } from './data/testData';

const handlers = [
  rest.get('/post/api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
  rest.post('post/api/register', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(res));
  }),
  rest.post('/api/post', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req));
  }),
  rest.get('/api/review/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getRandomPost));
  }),
  rest.patch('/api/review/write/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req));
  }),
  rest.get('/api/advice', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(advice));
  }),
  rest.get('/api/main', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(main));
  }),
];

export default handlers;
