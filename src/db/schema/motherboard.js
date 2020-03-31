const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

var Schema = mongoose.Schema;

const MotherboardSchema = new Schema({
  name: {
    type: STRING,
    required: true
  },
  category: {
    type: STRING,
    default: 'motherboard'
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
  }
});
const MotherboardModel = mongoose.model('Motherboard', MotherboardSchema);
module.exports = MotherboardModel;
