const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL, BUFFER } = require('../types');
var Schema = mongoose.Schema;

const PsuSchema = new Schema({
  name: {
    type: STRING,
    required: true,
  },
  category: {
    type: STRING,
    default: 'psu',
  },
  brand: {
    type: STRING,
    required: true,
  },
  price: {
    type: DECIMAL,
    required: true,
  },
  image: {
    type: STRING,
  },
  encodedImage: {
    type: BUFFER,
  },
  localRetailer: {
    type: STRING,
    default: MSY,
  },
  retailerId: {
    type: STRING,
    required: true,
  },
  retailerSKU: {
    type: STRING,
    required: true,
  },
  TDP: {
    type: STRING,
  },
  performanceLevel: {
    type: STRING,
  },
  inStock: {
    type: BOOLEAN,
  },
  maximumPower: {
    type: STRING,
  },
  fan: {
    type: STRING,
  },
  efficiency: {
    type: STRING,
  },
  certified: {
    type: STRING,
  },
  inputVoltage: {
    type: STRING,
  },
});

const PsuModel = mongoose.model('Psu', PsuSchema);
module.exports = PsuModel;
