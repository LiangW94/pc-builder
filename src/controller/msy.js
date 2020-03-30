/**
 * @description fetch data controller
 */

const { Cpu, Motherboard } = require('../db/schema/index');
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
  motherboardDataMapper
} = require('../services/formatter');

async function fetchCpuDataMongoose() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CPU);
    const formattedData = cpuDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, Cpu);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 1,
      message: error.message
    });
  }
}

async function fetchMotherboardDataMongoose() {
  try {
    const productList = await scrapProductDetail(
      MSY_CONFIG.CATEGORY_ID.MOTHERBOARD
    );
    const formattedData = motherboardDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedData, Motherboard);
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

    const createdProduct = await findOrCreate(formattedCpuData);
    const updatedProduct = await updateData(formattedCpuData);
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
  fetchCpuDataMongoose,
  fetchMotherboardDataMongoose
};
