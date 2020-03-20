const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
const { MSY } = require('../../utils/constants');

const Memory = seq.define('memory', {
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
  capacity: {
    type: STRING
  },
  frequency: {
    type: STRING
  },
  ddr: {
    type: STRING
  },
  isDesktop: {
    type: BOOLEAN
  },
  voltage: {
    type: BOOLEAN
  }
});

module.exports = Memory;
