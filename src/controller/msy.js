const CpuModel = require('../db/schema/cpu');

/**
 * @description fetch data controller
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { scrapProductDetail } = require('../scraperService/scraper');
const { MSY_CONFIG } = require('../utils/constants');
const {
  findOrCreate,
  updateData,
  findOneOrUpdate
} = require('../services/msy');
const { cpuDataMapper } = require('../services/formatter');

async function fetchCpuDataSequelize() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CPU);
    const formattedCpuData = cpuDataMapper(productList.data);

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

async function fetchCpuDataMongoose() {
  try {
    const productList = await scrapProductDetail(MSY_CONFIG.CATEGORY_ID.CPU);
    const formattedCpuData = cpuDataMapper(productList.data);
    const result = await findOneOrUpdate(formattedCpuData);
    return new SuccessModel(result);
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
  fetchCpuDataMongoose
};
