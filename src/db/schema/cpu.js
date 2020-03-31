const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
var Schema = mongoose.Schema;

const CpuSchema = new Schema({
  name: {
    type: STRING,
    required: true
  },
  category: {
    type: STRING,
    default: 'cpu'
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
  socket: {
    type: STRING
  },
  integratedGPU: {
    type: BOOLEAN
  }
});

const CpuModel = mongoose.model('Cpu', CpuSchema);
module.exports = CpuModel;
