/**
 * @description service
 */

const { Cpu } = require('../db/model/index');

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

module.exports = { bulkCreate };
