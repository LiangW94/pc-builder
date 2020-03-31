const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

var Schema = mongoose.Schema;

const MemorySchema = new Schema({
  name: {
    type: STRING,
    required: true
  },
  category: {
    type: STRING,
    default: 'memory'
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
    type: STRING,
    required: true
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
    type: STRING
  }
});

const MemoryModel = mongoose.model('Memory', MemorySchema);
module.exports = MemoryModel;
