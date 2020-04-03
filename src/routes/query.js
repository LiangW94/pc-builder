/**
 * @description export for test purpose
 */

const router = require('koa-router')();
const { searchByName } = require('../controller/query');
const sanitizeHtml = require('sanitize-html');

router.prefix('/query');

router.post('/search', async function(ctx, next) {
  const body = ctx.request.body;
  const keyword = body.keyword ? sanitizeHtml(body.keyword) : null;
  const category = body.category ? sanitizeHtml(body.category) : null;
  const result = await searchByName(keyword, category);
  ctx.body = result;
});

module.exports = router;
