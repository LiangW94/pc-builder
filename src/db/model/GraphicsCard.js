const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
const { MSY } = require('../../utils/constants');

const GraphicsCard = seq.define('graphicsCard', {
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
    type: STRING,
    allowNull: false
  },
  TDP: {
    type: STRING
  },
  performanceLevel: {
    type: STRING
  },
  inStock: {
    type: BOOLEAN
  },
  memorySize: {
    type: STRING
  },
  memoryType: {
    type: STRING
  },
  chipsetManufacture: {
    type: STRING
  },
  GPUseries: {
    type: STRING
  },
  GPU: {
    type: STRING
  },
  gamingRecommended: {
    type: BOOLEAN
  }
});

module.exports = GraphicsCard;
