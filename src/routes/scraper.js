/**
 * @description export for test purpose
 */
const {
  fetchCpuData,
  fetchMotherboardData,
  fetchMemoryData,
  fetchCaseData,
  fetchGpuData,
  fetchPsuData,
  fetchStorageData
} = require('../controller/msy');

const router = require('koa-router')();

router.prefix('/scraper');

router.get('/fetchAll', async function(ctx, next) {
  const cpuResult = await fetchCpuData();
  const motherboardResult = await fetchMotherboardData();
  const memoryResult = await fetchMemoryData();
  const caseResult = await fetchCaseData();
  const gpuResult = await fetchGpuData();
  const psuResult = await fetchPsuData();
  const storageResult = await fetchStorageData();
  ctx.body = [
    cpuResult,
    motherboardResult,
    memoryResult,
    caseResult,
    gpuResult,
    psuResult,
    storageResult
  ];
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

router.get('/case', async function(ctx, next) {
  const result = await fetchCaseData();
  ctx.body = result;
});

router.get('/gpu', async function(ctx, next) {
  const result = await fetchGpuData();
  ctx.body = result;
});

router.get('/psu', async function(ctx, next) {
  const result = await fetchPsuData();
  ctx.body = result;
});

router.get('/storage', async function(ctx, next) {
  const result = await fetchStorageData();
  ctx.body = result;
});

module.exports = router;
