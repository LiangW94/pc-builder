const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
const { MSY } = require('../../utils/constants');

const Motherboard = seq.define('motherboard', {
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
  localRetailer: {
    type: STRING,
    defaultValue: MSY
  },
  retailerId: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  retailerSKU: {
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
  chipset: {
    type: STRING
  },
  supportM2: {
    type: BOOLEAN
  },
  size: {
    type: STRING
  },
  wirelessLAN: {
    type: BOOLEAN
  },
  integratedGPU: {
    type: BOOLEAN
  }
});

module.exports = Motherboard;
