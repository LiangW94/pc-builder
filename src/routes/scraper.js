/**
 * @description export for test purpose
 */
const { fetchCpuDataMongoose } = require('../controller/msy');

const router = require('koa-router')();

router.prefix('/scraper');

router.get('/cpu', async function(ctx, next) {
  const result = await fetchCpuDataMongoose();
  ctx.body = result;
});

module.exports = router;
