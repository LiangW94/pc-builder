const { isDev, isProd, isTest } = require('../utils/env');
const MONGODB_CONFIG = require('../../password.json');

let MONGODB_CONNECTION_STRING = `mongodb+srv://${MONGODB_CONFIG.userName}:${MONGODB_CONFIG.password}@cluster0-buo0d.mongodb.net/${MONGODB_CONFIG.collection}?retryWrites=true&w=majority`;

let MYSQL_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'pc_builder_dev'
};

let REDIS_CONFIG = {
  port: 6379,
  host: '127.0.0.1'
};

if (isDev || isTest) {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'pc_builder_dev'
  };

  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1'
  };
}

if (isProd) {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'pc_builder_dev'
  };

  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1'
  };
}

module.exports = {
  MYSQL_CONFIG,
  REDIS_CONFIG,
  MONGODB_CONNECTION_STRING
};
