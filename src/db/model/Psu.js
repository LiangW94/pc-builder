const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

const Psu = seq.define('psu', {
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
  maximumPower: {
    type: DECIMAL
  },
  fan: {
    type: STRING
  },
  efficiency: {
    type: STRING
  },
  certified: {
    type: STRING
  },
  inputVoltage: {
    type: STRING
  }
});

module.exports = Psu;
