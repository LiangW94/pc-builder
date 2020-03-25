/**
 * @description fetch data controller
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { scrapProductDetail } = require('../scraperService/scraper');
const { findOrCreate, updateCpuData } = require('../services/msy');
const { cpuDataMapper } = require('../services/formatter');

async function fetchCpuData() {
  try {
    const productList = await scrapProductDetail();
    const formattedCpuData = cpuDataMapper(productList.data);

    const createdProduct = await findOrCreate(formattedCpuData);
    const updatedProduct = await updateCpuData(formattedCpuData);
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
  fetchCpuData
};
