const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
var Schema = mongoose.Schema;

const GpuSchema = new Schema({
  name: {
    type: STRING,
    required: true
  },
  category: {
    type: STRING,
    default: 'graphicsCard'
  },
  brand: {
    type: STRING,
    required: true
  },
  price: {
    type: DECIMAL,
    required: true
  },
  image: {
    type: STRING
  },
  localRetailer: {
    type: STRING,
    default: MSY
  },
  retailerId: {
    type: STRING,
    required: true
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

const GpuModel = mongoose.model('GraphicsCard', GpuSchema);
module.exports = GpuModel;
