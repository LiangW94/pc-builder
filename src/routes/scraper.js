/**
 * @description export for test purpose
 */
const {
  fetchCpuData,
  fetchMotherboardData,
  fetchMemoryData
} = require('../controller/msy');

const router = require('koa-router')();

router.prefix('/scraper');

router.get('/fetchAll', async function(ctx, next) {
  const cpuResult = await fetchCpuData();
  const motherboardResult = await fetchMotherboardData();
  const memoryResult = await fetchMemoryData();
  ctx.body = [cpuResult, motherboardResult, memoryResult];
});

router.get('/cpu', async function(ctx, next) {
  const result = await fetchCpuData();
  ctx.body = result;
});

router.get('/motherboard', async function(ctx, next) {
  const result = await fetchMotherboardData();
  ctx.body = result;
});

router.get('/memory', async function(ctx, next) {
  const result = await fetchMemoryData();
  ctx.body = result;
});

module.exports = router;
