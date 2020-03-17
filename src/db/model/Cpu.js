/**
 * @description cpu data model
 *
 */

const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

const Cpu = seq.define('cpu', {
  name: {
    type: STRING,
    allowNull: false
  },
  category: {
    type: STRING,
    allowNull: false
  },
  brand: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: DECIMAL,
    allowNull: false
  },
  image: {
    type: STRING
  },
  tpd: {
    type: DECIMAL
  },
  performanceLevel: {
    type: STRING
  },
  inStock: {
    type: BOOLEAN
  },
  socket: {
    type: STRING
  },
  integratedGPU: {
    type: BOOLEAN
  }
});

module.exports = Cpu;
