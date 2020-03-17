const seq = require('../sequelize');
const { BOOLEAN, STRING, DECIMAL } = require('../types');

const GraphicsCard = seq.define('graphicsCard', {
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
  memorySize: {
    type: STRING
  },
  memoryType: {
    type: STRING
  },
  chipsetManufacture: {
    type: STRING
  },
  GPUseries: {
    type: STRING
  },
  gamingRecommended: {
    type: BOOLEAN
  }
});

module.exports = GraphicsCard;
