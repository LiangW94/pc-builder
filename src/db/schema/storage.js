const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL } = require('../types');
var Schema = mongoose.Schema;

const StorageSchema = new Schema({
  name: {
    type: STRING,
    require: true
  },
  category: {
    type: STRING,
    default: 'storage'
  },
  brand: {
    type: STRING,
    require: true
  },
  price: {
    type: DECIMAL,
    require: true
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
    require: true
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
  interface: {
    type: STRING
  },
  formFactor: {
    type: STRING
  },
  rpm: {
    type: STRING
  },
  cache: {
    type: STRING
  }
});

const StorageModel = mongoose.model('Storage', StorageSchema);
module.exports = StorageModel;
