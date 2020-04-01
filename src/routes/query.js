/**
 * @description export for test purpose
 */

const router = require('koa-router')();
const { searchByName } = require('../controller/query');
router.prefix('/query');

router.get('/search', async function(ctx, next) {
  const { keyword, category } = ctx.request.body;
  const result = await searchByName(keyword, category);
  ctx.body = result;
});

module.exports = router;
