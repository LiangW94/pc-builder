const Sequelize = require('sequelize');
const { MYSQL_CONFIG } = require('../config/db');
const { isProd, isTest } = require('../utils/env');

if (isTest) {
  // conf.logging = () => {};
}

// product only: connection pool
// if (isProd) {
//   conf.pool = {
//     max: 5, // max connections in the pool
//     mix: 0,
//     idle: 10000, // release the pool if not used in 10s
//   };
// }

const { host, user, password, database } = MYSQL_CONFIG;
const conf = {
  host,
  dialect: 'mysql',
};
const seq = new Sequelize(database, user, password, conf);
module.exports = seq;
