const mongoose = require('../mongodb');
const { MSY } = require('../../utils/constants');
const { BOOLEAN, STRING, DECIMAL, BUFFER } = require('../types');
var Schema = mongoose.Schema;

const CaseSchema = new Schema({
  name: {
    type: STRING,
    required: true,
  },
  category: {
    type: STRING,
    default: 'case',
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
  performanceLevel: {
    type: STRING,
  },
  inStock: {
    type: BOOLEAN,
  },
  size: {
    type: STRING,
  },
  feature: {
    type: STRING,
  },
  withPowerSupply: {
    type: BOOLEAN,
  },
  withSidePanelWindow: {
    type: BOOLEAN,
  },
});

const CaseModel = mongoose.model('Case', CaseSchema);
module.exports = CaseModel;
