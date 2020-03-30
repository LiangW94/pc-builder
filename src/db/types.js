/**
 * encapsulate model type
 */

// const Sequelize = require('sequelize');

// module.exports = {
//   STRING: Sequelize.STRING,
//   DECIMAL: Sequelize.DECIMAL,
//   TEXT: Sequelize.TEXT,
//   INTEGER: Sequelize.INTEGER,
//   BOOLEAN: Sequelize.BOOLEAN
// };

module.exports = {
  STRING: String,
  DECIMAL: Number,
  BOOLEAN: Boolean,
  DATE: Date,
  BUFFER: Buffer,
  ARRAY: Array
};
