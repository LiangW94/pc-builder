/**
 * @description export for test purpose
 */

const router = require('koa-router')();
const { searchByName } = require('../controller/query');
const sanitizeHtml = require('sanitize-html');

router.prefix('/query');

router.get('/search', async function(ctx, next) {
  const body = ctx.request.body;
  const keyword = sanitizeHtml(body.keyword);
  const category = sanitizeHtml(body.category);
  const result = await searchByName(keyword, category);
  ctx.body = result;
});

module.exports = router;
