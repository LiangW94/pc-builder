/**
 * @description export for test purpose
 */
const { fetchData } = require('../controller/msy');

const router = require('koa-router')();

router.prefix('/scraper');

router.get('/test', async function(ctx, next) {
  const result = await fetchData();
  ctx.body = result;
});

module.exports = router;
