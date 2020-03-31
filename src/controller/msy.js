/**
 * @description fetch data controller
 */

const {
  CpuModel,
  MotherboardModel,
  MemoryModel
} = require('../db/schema/index');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { scrapProductDetail } = require('../scraperService/scraper');
const { MSY_CONFIG } = require('../utils/constants');
const {
  findOrCreate,
  updateData,
  findOneOrUpdate
} = require('../services/msy');
const {
  cpuDataMapper,
  motherboardDataMapper,
  memoryDataMapper,
  caseDataMapper
} = require('../services/dataMapper');

async function fetchCpuData() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CPU);
    const formattedData = cpuDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, CpuModel);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

async function fetchMotherboardData() {
  try {
    const productList = await scrapProductDetail(
      MSY_CONFIG.CATEGORY_ID.MOTHERBOARD
    );
    const formattedData = motherboardDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, MotherboardModel);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

async function fetchMemoryData() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.MEMORY);
    const formattedData = memoryDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, MemoryModel);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

async function fetchCaseData() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CASE);
    const formattedData = caseDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, MemoryModel);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

// Legacy method
async function fetchCpuDataSequelize() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CPU);
    const formattedData = cpuDataMapper(productList.data);

    const createdProduct = await findOrCreate(formattedData);
    const updatedProduct = await updateData(formattedData);
    return new SuccessModel({ createdProduct, updatedProduct });
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

module.exports = {
  fetchCpuDataSequelize,
  fetchCpuData,
  fetchMotherboardData,
  fetchMemoryData,
  fetchCaseData
};
