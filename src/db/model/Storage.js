const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

const Storage = seq.define('storage', {
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

module.exports = Storage;
