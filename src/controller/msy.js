/**
 * @description fetch data controller
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { scrapProductDetail } = require('../scraperService/scraper');
const { bulkCreate, destroyTableData } = require('../services/msy');
const { cpuDataMapper } = require('../services/formatter');

async function fetchData() {
  try {
    await destroyTableData();
    console.log('form cleared');

    const productList = await scrapProductDetail();
    const formattedCpuData = cpuDataMapper(productList.data);
    const result = await bulkCreate(formattedCpuData);
    return new SuccessModel(result);
  } catch (error) {
    console.log(error.message);
    return new ErrorModel({
      errno: 10001,
      message: error.message
    });
  }
}

module.exports = {
  fetchData
};
