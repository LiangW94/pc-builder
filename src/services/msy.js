/**
 * @description service
 */

const { Cpu } = require('../db/model/index');

/**
 *
 * @param {Array} productList
 */
async function findOrCreate(productList) {
  let createNumber = 0;
  const createProducts = [];
  await Promise.all(
    productList.map(async (product, i) => {
      const result = await Cpu.findOrCreate({
        where: { retailerSKU: product.retailerSKU },
        defaults: product
      });
      if (result[1]) {
        createNumber++, createProducts.push(result[0].dataValues);
      }
    })
  );
  console.log(createNumber, ' created: ', createProducts);
}

/**
 *
 * @param {Array} productList
 */
async function bulkCreate(productList) {
  const result = await Cpu.bulkCreate(productList);
  return result.dataValues;
}

async function destroyTableData() {
  const result = await Cpu.destroy({ where: {} });
  console.log(result);
}

module.exports = { bulkCreate, destroyTableData, findOrCreate };
