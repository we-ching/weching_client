import { rest } from 'msw';
import { getRandomPost, testData, testNickname, testOverlap, testSignOut } from './data/testData';

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
    return res(ctx.status(200), ctx.json(testNickname));
  }),
  rest.patch('/api/review/write/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req));
  }),
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testOverlap));
  }),
  rest.post('/api/user/checkName', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testOverlap));
  }),
  rest.delete('/api/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testSignOut));
  }),
];

export default handlers;
