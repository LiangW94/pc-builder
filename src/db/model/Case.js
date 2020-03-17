const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

const Case = seq.define('case', {
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
  size: {
    type: STRING
  },
  feature: {
    type: STRING
  }
});

module.exports = Case;
