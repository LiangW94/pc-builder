/**
 * @description service
 */

const { Cpu } = require('../db/model/index');

async function destroyTableData() {
  const result = await Cpu.destroy({ where: {} });
  console.log(result);
}

/**
 *
 * @param {Array} productList
 */
async function bulkCreate(productList) {
  debugger;
  const result = await Cpu.bulkCreate(productList);
  debugger;
  return result.dataValues;
}

module.exports = { bulkCreate, destroyTableData };
