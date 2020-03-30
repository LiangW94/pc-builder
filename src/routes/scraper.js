/**
 * @description export for test purpose
 */
const {
  fetchCpuDataMongoose,
  fetchMotherboardDataMongoose
} = require('../controller/msy');

const router = require('koa-router')();

router.prefix('/scraper');

router.get('/cpu', async function(ctx, next) {
  const result = await fetchCpuDataMongoose();
  ctx.body = result;
});

router.get('/motherboard', async function(ctx, next) {
  const result = await fetchMotherboardDataMongoose();
  ctx.body = result;
});

module.exports = router;
