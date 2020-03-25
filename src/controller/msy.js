/**
 * @description fetch data controller
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { scrapProductDetail } = require('../scraperService/scraper');
const { findOrCreate } = require('../services/msy');
const { cpuDataMapper } = require('../services/formatter');

async function fetchCpuData() {
  try {
    const productList = await scrapProductDetail();
    const formattedCpuData = cpuDataMapper(productList.data);

    const result = await findOrCreate(formattedCpuData);
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
  fetchCpuData
};
