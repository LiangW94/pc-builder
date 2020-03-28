const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
var Schema = mongoose.Schema;

const CpuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  localRetailer: {
    type: String,
    default: MSY
  },
  retailerId: {
    type: String,
    required: true
  },
  retailerSKU: {
    type: String,
    required: true
  },
  tpd: {
    type: String
  },
  performanceLevel: {
    type: String
  },
  inStock: {
    type: Boolean
  },
  socket: {
    type: String
  },
  integratedGPU: {
    type: Boolean
  }
});
const CpuModel = mongoose.model('Cpu', CpuSchema);
module.exports = CpuModel;
