/**
 * @description export for test purpose
 */

const router = require('koa-router')();
const { searchByName, fetchRecommendation } = require('../controller/query');
const sanitizeHtml = require('sanitize-html');

router.prefix('/api/query');

router.post('/search', async function (ctx, next) {
  const body = ctx.request.body;
  const keyword = body.keyword ? sanitizeHtml(body.keyword) : null;
  const category = body.category ? sanitizeHtml(body.category) : null;
  const result = await searchByName(keyword, category);
  ctx.body = result;
});

router.get('/fetchRecommendation', async function (ctx, next) {
  const result = await fetchRecommendation(fetchRecommendation);
  ctx.body = result;
});

module.exports = router;
